"use server"
import { hash } from 'crypto';
import { prisma } from './prisma'
import { User } from '@/generated/prisma';

/**
 * The response of the auth functions
 */
type AuthResponse = {
    success: boolean;
    error?: string;
    user?: User;
}

/**
 * Create a user
 * @param username - The username of the user
 * @param password - The password of the user
 * @returns The user
 * @throws If the user already exists
 */
export async function createUser(username: string, password: string): Promise<AuthResponse> {
    const existing = await prisma.user.findUnique({ where: { username: username } })

    if (existing) return { success: false, error: 'User already exists' }

    const hashedPassword = await hash("sha256", password);

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });

    return { success: true, user: user };
}

/**
 * Validate a user
 * @param username - The username of the user
 * @param password - The password of the user
 * @returns The user
 * @throws If the user is not found or the password is invalid
 */
export async function validateUser(username: string, password: string): Promise<AuthResponse> {

    const user = await prisma.user.findUnique({ where: { username: username } })
    if (!user) return { success: false, error: 'User not found' }

    const hashedPassword = await hash("sha256", password);
    const isValid = (user.password === hashedPassword)

    return isValid ? { success: true, user: user } : { success: false, error: 'Invalid password' }
}


/**
 * Change the password of a user
 * @param id - The id of the user
 * @param data - The data of the user
 * @returns The user
 * @throws If the user is not found or the password is invalid
 */
export async function changePassword(id: string, data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}): Promise<AuthResponse> {

    if (data.newPassword !== data.confirmNewPassword) return { success: false, error: 'New passwords do not match' }

    const user = await prisma.user.findUnique({ where: { id: id } })
    if (!user) return { success: false, error: 'User not found' }

    const hashedCurrentPassword = await hash("sha256", data.currentPassword);
    if (user.password !== hashedCurrentPassword) return { success: false, error: 'Invalid current password' }

    const hashedNewPassword = await hash("sha256", data.newPassword);
    await prisma.user.update({ where: { id: id }, data: { password: hashedNewPassword } });

    return { success: true }
}