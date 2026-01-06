import { prisma } from "@/lib/prisma";
import FilesPage from "./components/files-page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const files = await prisma.file.findMany({
    where: {
      clientId: id,
    },
  });

  return <FilesPage clientId={id} files={files} />;
}
