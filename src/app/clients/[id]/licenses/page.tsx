import { prisma } from "@/lib/prisma";
import { LicensesList } from "./components/licenses-list";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ClientLicensesPage({ params }: Props) {
  const { id } = await params;

  const [licenses, types] = await Promise.all([
    await prisma.license.findMany({
      where: {
        client: {
          id: id,
        },
        parentId: null,
      },
      include: {
        type: true,
        subLicenses: {
          include: {
            type: true,
          },
        },
      },
    }),
    await prisma.licenseType.findMany(),
  ]);

  return <LicensesList clientId={id} licenses={licenses} types={types} />;
}
