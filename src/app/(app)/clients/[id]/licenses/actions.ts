"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma";
import { ActionResponse } from "@/types/action-response";

type AddLicenseInput = {
  id: string;
  type: string;
  subLicenses?: { id: string; type: string }[];
};

type EditLicense = {
  type: string;
  subLicenses: { id: string; type: string }[];
};

/**
 * Handles the submission of a new license
 * @param clientId - The id of the client
 * @param data - The data of the license to be created
 * @returns The response of the action
 * @throws An error if the license already exists or if one or more sub licenses already exist
 */
export async function addLicense(clientId: string, data: AddLicenseInput): Promise<ActionResponse> {
  try {
    // Check if the license already exists
    const existingLicense = await prisma.license.findUnique({
      where: {
        id: data.id,
      },
    });

    if (existingLicense) throw new ActionError("License already exists");

    // Check if sub licenses already exist
    const existingSubLicenses = await prisma.license.findMany({
      where: {
        id: { in: data.subLicenses?.map((subLicense) => subLicense.id) },
      },
    });

    if (existingSubLicenses.length > 0)
      throw new ActionError("One or more sub licenses already exist");

    // Create the license
    await prisma.license.create({
      data: {
        id: data.id,
        clientId: clientId,
        typeKey: data.type,
      },
    });

    if (data.subLicenses) {
      for (const license of data.subLicenses) {
        await prisma.license.create({
          data: {
            id: license.id,
            clientId: clientId,
            typeKey: license.type,
            parentId: data.id,
          },
        });
      }
    }

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}

/**
 * Handles the submission of an edited license
 * @param id - The id of the license
 * @param data - The data of the license to be edited
 * @returns The response of the action
 * @throws An error if the license does not exist or if one or more sub licenses already exist
 */
export async function editLicense(id: string, data: EditLicense): Promise<ActionResponse> {
  try {
    // Check if the license exists
    const license = await prisma.license.findUnique({
      where: { id: id },
      include: {
        client: true,
        subLicenses: true,
      },
    });
    if (!license) throw new ActionError("License not found");

    // Edit the sub licenses if they exist
    if (data.subLicenses.length > 0) {
      const oldSubLicenses = await prisma.license.findMany({
        where: {
          parentId: id,
        },
      });

      const existingIds = oldSubLicenses.map((l) => l.id);
      const inputIds = data.subLicenses
        .map((l) => l.id)
        .filter((id) => id != null);

      const toCreate = data.subLicenses.filter(
        (l) => !existingIds.includes(l.id)
      );
      const toUpdate = data.subLicenses.filter((l) =>
        existingIds.includes(l.id)
      );


      const toDelete = oldSubLicenses.filter((l) => !inputIds.includes(l.id));

      if (toCreate.length > 0) await createSubLicenses(id, license.client.id, toCreate);
      if (toDelete.length > 0) await deleteSubLicenses(toDelete.map((l) => l.id));
      if (toUpdate.length > 0) await updateSubLicenses(toUpdate);

    } else if (license.subLicenses.length > 0) {
      await deleteSubLicenses(license.subLicenses.map((l) => l.id));
    }

    // Edit the license type if it has changed
    if (data.type && data.type !== license.typeKey) {
      await prisma.license.update({
        where: { id: id },
        data: { typeKey: data.type },
      });
    }

    return { ok: true };
  } catch (error) {
    console.error(error);
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}

/**
 * Deletes the license
 * @param id - The id of the license
 */
export async function deleteLicense(id: string) {
  // Delete all sub licenses
  await prisma.license.deleteMany({
    where: {
      parentId: id,
    },
  });
  // Delete the license
  await prisma.license.delete({
    where: { id },
  });
}

/**
 * Deletes the sub licenses
 * @param ids - The ids of the sub licenses to be deleted
 */
async function deleteSubLicenses(ids: string[]) {
  await prisma.license.deleteMany({
    where: {
      id: { in: ids },
    },
  });
}

/**
 * Creates the sub licenses
 * @param parentId - The id of the parent license
 * @param clientId - The id of the client
 * @param licenses - The licenses to be created
 */
async function createSubLicenses(
  parentId: string,
  clientId: string,
  licenses: { id: string; type: string }[]
) {
  const existingLicenses = await prisma.license.findMany({
    where: {
      parentId: parentId,
    },
  });

  if (existingLicenses.length > 0) throw new ActionError("Sublicenses already exist");

  await prisma.license.createMany({
    data: licenses.map((l) => ({
      id: l.id,
      clientId: clientId,
      parentId: parentId,
      typeKey: l.type,
    })),
  });
}

/**
 * Updates the sub licenses
 * @param licenses - The licenses to be updated
 */
async function updateSubLicenses(licenses: { id: string; type: string }[]) {

  for (const license of licenses) {
    await prisma.license.update({
      where: { id: license.id },
      data: { typeKey: license.type },
    });
  }
}

