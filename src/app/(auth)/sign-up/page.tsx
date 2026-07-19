import type { Metadata } from "next";

import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up | Material Shadcn",
  description: "Create your Material Shadcn account.",
};

export default function SignUpPage() {
  return <SignUpForm />;
}