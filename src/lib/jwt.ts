import { User } from "@/generated/prisma";
import { SignJWT, jwtVerify, decodeJwt } from 'jose'

type Payload = {
    id: string;
    username: string;
    iat: number;
    exp: number;
}


/**
 * Create a JWT for a user
 * @param user - The user to create the JWT for
 * @returns The JWT
 */
export async function createJWT(user: User): Promise<string> {
    const payload = {
        id: user.id,
        username: user.username,
    }

    const secret = new TextEncoder().encode(user.secret)

    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(secret)

    return token
}


/**
 * Decode a JWT
 * @param token - The JWT to decode
 * @returns The payload of the JWT
 */
export async function decodeJWT(token: string): Promise<{ success: boolean, payload: Payload | null, error?: string }> {
    try {
        const payload = await decodeJwt(token) as Payload
        return { success: true, payload: payload }
    } catch (error) {
        return { success: false, payload: null, error: error instanceof Error ? error.message : 'Unknown error' }
    }
}


/**
 * Verify a JWT
 * @param user - The user to verify the JWT for
 * @param token - The JWT to verify
 * @returns The payload of the JWT
 */
export async function verifyJWT(user: User, token: string): Promise<{ success: boolean, payload: Payload | null, error?: string }> {
    const secret = new TextEncoder().encode(user.secret)
    try {
        const { payload } = await jwtVerify(token, secret)
        return { success: true, payload: payload as Payload }
    } catch (error) {
        return { success: false, payload: null, error: error instanceof Error ? error.message : 'Unknown error' }
    }
}