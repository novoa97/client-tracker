'use server'
import { z } from 'zod'
import { createUser as create, validateUser } from '@/lib/auth'
import { cookies } from 'next/headers'

const signupSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
})

const loginSchema = z.object({
    username: z.string().min(1),
    password: z.string(),
})

export async function createUser(data: { username: string; password: string; confirmPassword: string }) {
    const result = signupSchema.safeParse(data)

    if (!result.success) {
        throw new Error('Datos inválidos')
    }

    return await create(result.data.username, result.data.password)
}


export async function login(data: { username: string; password: string }): Promise<{ success: boolean, error?: string }> {
    const result = loginSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: 'Invalid input' }
    }

    const user = await validateUser(result.data.username, result.data.password)

    if (!user) {
        return { success: false, error: 'Invalid credentials' }
    }

    // Create session cookie
    const authCookie = await cookies()
    authCookie.set('session', user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
    })
    return { success: true }
}