import { Report } from "@/app/dashboard/reports";

export async function getReports(token: string | null): Promise<Report[]> {
  try {
    if (!token) {
      console.error("No authentication token provided");
      return [];
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_HOST}/api/reports`;
    console.log("Fetching reports from:", apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
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
