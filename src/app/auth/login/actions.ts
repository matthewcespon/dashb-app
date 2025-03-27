"use client"

import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string()
  .min(8, { message: "Password must be at least 8 characters" })
  .trim(),
})


export async function login(prevState: any, formData: FormData) {
  const formValues = Object.fromEntries(formData);
  
  const result = loginSchema.safeParse(formValues)
  if(!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }
  
  const { email, password } = result.data

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_HOST}/api/auth/login`;
    console.log("Attempting to fetch:", apiUrl);
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });

    const responseData = await response.json();
    console.log("API response status:", response.status);
    
    if (!response.ok) {
      const errorMessage = responseData.message || responseData.error || "Invalid credentials";
      throw new Error(errorMessage);
    }

    return responseData;
  } catch (error: any) {
    console.error("Login error:", error);
    return { 
      error: error?.message || "Authentication failed. Please check your credentials."
    };
  }
}