"use client"

import type React from "react"
import { useActionState, useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MoonIcon, SunIcon } from "lucide-react"
import Cookies from 'js-cookie';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from 'next-themes';
import { useFormStatus } from "react-dom"
import { login } from "@/app/auth/login/actions"

export default function LoginPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [state, loginAction] = useActionState(login, undefined)
  
  useEffect(() => {
    console.log("checking for cookie");
    if (state && state._id) {
      console.log("Login successful, redirecting...");
      const hasCookie = !!Cookies.get('token');
      console.log("Cookie present:", hasCookie);
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 100);
    }
  }, [state, router]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </div>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form action={loginAction}>
          <CardContent className="space-y-4">
            {state?.error && (
              <div className="p-3 bg-destructive/15 text-destructive text-sm rounded-md">
                {state.error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            {state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email}</p>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary underline underline-offset-4">
                  Forgot password?
                </Link>
              </div>
              <div className="pb-10">
                <Input
                  id="password"
                  name="password"
                  type="password"
                />
              </div>

              {state?.errors?.password && (
                  <p className="text-red-500 text-sm">{state.errors.password}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <SubmitButton />
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-primary underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </Button>
  )
}