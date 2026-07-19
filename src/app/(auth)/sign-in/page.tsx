import type { Metadata } from "next";

import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In | Material Shadcn",
  description: "Sign in to your Material Shadcn account.",
};

export default function SignInPage() {
  return <SignInForm />;
}