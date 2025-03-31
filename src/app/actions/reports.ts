"use server"

import { cookies } from "next/headers";
import { Report } from "@/app/dashboard/reports";

export async function getReports(): Promise<any> {
  try {
    // Get the token from cookies server-side
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;
    
    if (!token) {
      console.error("No authentication token found in cookies");
      return [];
    }
    
    const apiUrl = `${process.env.NEXT_PUBLIC_API_HOST}/api/reports`;
    console.log("Fetching reports from:", apiUrl);
    
    // Include the token in the Authorization header
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`,
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching reports: ${response.status}`);
    }
    
    const data = await response.json();
    return data as Report[];
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    return [];
  }
}