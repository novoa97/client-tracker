import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
    // Delete session cookie
    const authCookie = await cookies();
    authCookie.delete("session");

    return redirect("/login");
}
