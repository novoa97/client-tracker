import { IncidentStatus, Prisma } from "@/generated/prisma"


export const licenseWithRelations = Prisma.validator<Prisma.LicenseDefaultArgs>()({
    include: {
        type: true,
        subLicenses: {
            include: {
                type: true,
            }
        }
    }
})

export type LicenseWithRelations = Prisma.LicenseGetPayload<typeof licenseWithRelations>


export const DeviceWithRelations = Prisma.validator<Prisma.LicenseDefaultArgs>()({
    include: {
        type: true,
    }
})


export type DeviceWithRelations = Prisma.DeviceGetPayload<typeof DeviceWithRelations>


export const ClientWithType = Prisma.validator<Prisma.ClientDefaultArgs>()({
    include: {
        type: true,
    }
})

export const ClientWithTypeAndOpenIncidents = Prisma.validator<Prisma.ClientDefaultArgs>()({
    include: {
        type: true,
        _count: {
            select: {
                incidents: {
                    where: {
                        status: IncidentStatus.OPEN,
                    },
                },
            },
        },
    }
})

export const ClientWithTypeAndCount = Prisma.validator<Prisma.ClientDefaultArgs>()({
    include: {
        type: true,
        _count: {
            select: {
                licenses: true,
                devices: true,
            }
        }
    }
})

export type ClientWithType = Prisma.ClientGetPayload<typeof ClientWithType>
export type ClientWithTypeAndOpenIncidents = Prisma.ClientGetPayload<typeof ClientWithTypeAndOpenIncidents>
export type ClientWithTypeAndCount = Prisma.ClientGetPayload<typeof ClientWithTypeAndCount>