import { DeviceType } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export type DeviceTypeWithInUse = DeviceType & { inUse: boolean };


export async function getDevicesType(): Promise<DeviceTypeWithInUse[]> {
    const types = await prisma.deviceType.findMany({
        include: {
            _count: {
                select: {
                    devices: true,
                },
            },
        },
    });
    return types.map((type) => ({
        ...type,
        inUse: type._count.devices > 0,
    }));
}