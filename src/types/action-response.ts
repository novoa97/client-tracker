

export type ActionResponse<T = undefined> =
    | { ok: true, data?: T }
    | { ok: false; message: string }