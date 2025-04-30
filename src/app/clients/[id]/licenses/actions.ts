"use server";
import { ActionError } from "@/errors/actions";
import { prisma } from "@/lib/prisma";
import { ActionResponse } from "@/types/action-response";

type AddLicenseInput = {
  id: string;
  type: string;
  clientId: string;
  subLicenses?: { id: string; type: string }[];
};

export async function addLicense(
  data: AddLicenseInput
): Promise<ActionResponse> {
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
        clientId: data.clientId,
        typeKey: data.type,
      },
    });

    if (data.subLicenses) {
      for (const license of data.subLicenses) {
        await prisma.license.create({
          data: {
            id: license.id,
            clientId: data.clientId,
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

type EditLicense = {
  id: string;
  type: string;
  subLicenses: { id: string; type: string }[];
};

export async function editLicense(data: EditLicense): Promise<ActionResponse> {
  try {
    // Check if the license exists
    const license = await prisma.license.findUnique({
      where: { id: data.id },
      include: {
        client: true,
        subLicenses: true,
      },
    });
    if (!license) throw new ActionError("License not found");

    if (data.subLicenses.length > 0) {
      const oldSubLicenses = await prisma.license.findMany({
        where: {
          parentId: data.id,
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

      await deleteSubLicenses(toDelete.map((l) => l.id));

      await createSubLicenses(data.id, license.client.id, toCreate);

      await updateSubLicenses(toUpdate);
    } else {
      await deleteSubLicenses(license.subLicenses.map((l) => l.id));
    }

    // Edit the license
    await prisma.license.update({
      where: { id: data.id },
      data: { typeKey: data.type },
    });

    return { ok: true };
  } catch (error) {
    if (error instanceof ActionError) return error.toResponse();
    throw error;
  }
}

async function deleteSubLicenses(ids: string[]) {
  await prisma.license.deleteMany({
    where: {
      id: { in: ids },
    },
  });
}

async function createSubLicenses(
  parentId: string,
  clientId: string,
  licenses: { id: string; type: string }[]
) {
  await prisma.license.createMany({
    data: licenses.map((l) => ({
      id: l.id,
      clientId: clientId,
      parentId: parentId,
      typeKey: l.type,
    })),
  });
}

async function updateSubLicenses(licenses: { id: string; type: string }[]) {
  for (const license of licenses) {
    await prisma.license.update({
      where: { id: license.id },
      data: { typeKey: license.type },
    });
  }
}

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
