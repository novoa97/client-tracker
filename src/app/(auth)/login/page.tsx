import { prisma } from "@/lib/prisma";
import LoginForm from "../components/login-form";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LoginPage() {
  const count = await prisma.user.count();

  if (count === 0) {
    return redirect("/signup");
  }

  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (session) {
    return redirect("/");
  }

  return <LoginForm />;
}
