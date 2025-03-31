import { ReportsTable } from "@/components/reports-table";
import { getReports } from "@/app/actions/reports";

export default async function Home() {
  const response = await getReports();
  const reports = response?.reports || [];
  console.log(reports)
  
  return (
    <div className="space-y-4">
        <h1 className="text-2xl font-bold">Reports Dashboard</h1>
        <div className="rounded-lg border bg-card">
          <ReportsTable initialData={reports} />
        </div>
      </div>
  );
}