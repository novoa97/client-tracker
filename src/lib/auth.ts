"use server"
import { hash } from 'crypto';
import { prisma } from './prisma'


export async function createUser(username: string, password: string) {
    const existing = await prisma.user.findUnique({ where: { username: username } })

    if (existing) throw new Error('User already exists')

    const hashedPassword = await hash("sha256", password);

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });

    return user;
}

export async function validateUser(username: string, password: string) {

    const user = await prisma.user.findUnique({ where: { username: username } })
    if (!user) return null

    const hashedPassword = await hash("sha256", password);
    const isValid = (user.password === hashedPassword)

    return isValid ? user : null
}


export async function changePassword(id: string, data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}) {
    if (data.newPassword !== data.confirmNewPassword) return { success: false, error: 'New passwords do not match' }
    const user = await prisma.user.findUnique({ where: { id: id } })
    if (!user) return { success: false, error: 'User not found' }
    const hashedCurrentPassword = await hash("sha256", data.currentPassword);
    if (user.password !== hashedCurrentPassword) return { success: false, error: 'Invalid current password' }
    const hashedNewPassword = await hash("sha256", data.newPassword);
    await prisma.user.update({ where: { id: id }, data: { password: hashedNewPassword } });
    return { success: true }
}