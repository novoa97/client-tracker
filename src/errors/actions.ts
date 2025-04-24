import { ActionResponse } from "@/types/action-response";


export class ActionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ActionError";
    }

    toResponse(): ActionResponse {
        return { ok: false, message: this.message }
    }
}