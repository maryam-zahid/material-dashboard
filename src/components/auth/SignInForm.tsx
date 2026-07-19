"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type FormEvent,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 800);
  }

  return (
    <section className="w-full max-w-[453px] rounded-lg border border-[#E7E5E4] bg-white p-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-[30px] font-bold leading-9 text-[#1C1917]">
          Sign In
        </h1>

        <p className="text-[14px] font-normal leading-5 text-[#57534E]">
          Welcome back! Please sign in to your account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-[29px] flex flex-col gap-6"
      >
        <div className="flex flex-col gap-[6px]">
          <Label
            htmlFor="email"
            className="text-[14px] font-normal leading-5 text-[#1C1917]"
          >
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@mail.com"
            autoComplete="email"
            required
            className="h-10 rounded-lg border-[#E7E5E4] bg-[#F5F5F4] px-3 text-[14px] font-normal text-[#1C1917] shadow-none placeholder:text-[#A8A29E] focus-visible:border-[#A8A29E] focus-visible:ring-2 focus-visible:ring-[#A8A29E]/20"
          />
        </div>

        <div className="flex flex-col gap-[6px]">
          <Label
            htmlFor="password"
            className="text-[14px] font-normal leading-5 text-[#1C1917]"
          >
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            className="h-10 rounded-lg border-[#E7E5E4] bg-[#F5F5F4] px-3 text-[14px] font-normal text-[#1C1917] shadow-none placeholder:text-[#A8A29E] focus-visible:border-[#A8A29E] focus-visible:ring-2 focus-visible:ring-[#A8A29E]/20"
          />
        </div>

        <div className="flex min-h-9 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) =>
                setRememberMe(checked === true)
              }
              className="size-4 rounded border-[#E7E5E4] data-[state=checked]:border-[#1C1917] data-[state=checked]:bg-[#1C1917]"
            />

            <Label
              htmlFor="remember-me"
              className="cursor-pointer text-[14px] font-normal leading-5 text-[#78716C]"
            >
              Remember Me
            </Label>
          </div>

          <Button
            type="button"
            variant="outline"
            className="h-9 rounded-lg border-[#E7E5E4] bg-white px-3 text-[14px] font-normal leading-5 text-[#44403C] shadow-none hover:bg-[#F5F5F4]"
          >
            Forgot Password?
          </Button>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-[38px] w-full rounded-lg border border-[#1C1917] bg-gradient-to-b from-[#44403C] to-[#292524] px-4 text-[14px] font-normal leading-5 text-[#FAFAF9] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_2px_0_rgba(255,255,255,0.35)] hover:from-[#44403C] hover:to-[#292524] hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>

        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-[#E7E5E4]" />

          <span className="shrink-0 text-[14px] font-normal leading-5 text-[#78716C]">
            or continue with
          </span>

          <div className="h-px flex-1 bg-[#E7E5E4]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button
            type="button"
            variant="outline"
            className="h-9 rounded-lg border-[#E7E5E4] bg-white px-3 text-[14px] font-normal leading-5 text-[#44403C] shadow-none hover:bg-[#F5F5F4]"
          >
            <Image
              src="/images/icons/google.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />

            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-9 rounded-lg border-[#E7E5E4] bg-white px-3 text-[14px] font-normal leading-5 text-[#44403C] shadow-none hover:bg-[#F5F5F4]"
          >
            <Image
              src="/images/icons/github.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />

            GitHub
          </Button>
        </div>

        <p className="text-center text-[14px] font-normal leading-5 text-[#78716C]">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-[#1C1917] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1917]/30"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
}