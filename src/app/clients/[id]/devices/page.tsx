import { prisma } from "@/lib/prisma";
import { DevicesList } from "./components/devices-list";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ClientDevicesPage({ params }: Props) {
  const { id } = await params;

  const [devices, types] = await Promise.all([
    await prisma.device.findMany({
      where: {
        client: {
          id: id,
        },
      },
      include: {
        type: true,
      },
    }),
    await prisma.deviceType.findMany(),
  ]);

  return <DevicesList clientId={id} devices={devices} types={types} />;
}
