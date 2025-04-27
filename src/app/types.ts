import { Prisma } from "@/generated/prisma"


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

export type ClientWithType = Prisma.ClientGetPayload<typeof ClientWithType>