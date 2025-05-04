import SignupForm from "../components/signup-form";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const users = await prisma.user.findMany();

  if (users.length > 0) {
    return redirect("/login");
  }

  return <SignupForm />;
}
