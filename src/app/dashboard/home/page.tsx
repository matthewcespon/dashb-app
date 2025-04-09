"use client";

import { useState, useEffect } from 'react'
import { ReportsTable } from "@/components/reports-table"
import { getReports } from "@/app/actions/reports"
import { Report } from "@/app/dashboard/reports"

export default function Home() {
  const [reports, setReports] = useState<Report[]>([])
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    console.log("storedToken", storedToken)
    setToken(storedToken)
  }, []);

  useEffect(() => {
    async function fetchReports() {
      if (token) {
        console.log("Fetching reports with token:", token)
        const data = await getReports(token);
        console.log("Fetched reports:", data)
        setReports(data);
      }
    }

    fetchReports();
  }, [token]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Reports Dashboard</h1>
      <div className="rounded-lg border bg-card">
        <ReportsTable initialData={reports} />
      </div>
    </div>
  );
}