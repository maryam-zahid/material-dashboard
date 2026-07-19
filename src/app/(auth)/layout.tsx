import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-[#FAFAF9] bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{
        backgroundImage:
          "url('/images/backgrounds/texture-background-grainy.png')",
      }}
    >
      {children}
    </main>
  );
}