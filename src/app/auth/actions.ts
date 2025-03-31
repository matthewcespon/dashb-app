"use client"

import Cookies from 'js-cookie'
import { loginSchema } from './schema';


export async function login(prevState: any, formData: FormData) {

  console.log("Current NODE_ENV:", process.env.NODE_ENV);
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

    if (responseData && responseData.token) {
      // Client-side fallback when cookies fail to set
      try {
        Cookies.set('token', responseData.token, {
          expires: 30,
          secure: process.env.NODE_ENV === 'production'
        });
        console.log("Token set client-side as fallback");
      } catch (err) {
        console.error("Failed to set client-side token:", err);
      }
    }
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