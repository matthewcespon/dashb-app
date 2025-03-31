import { ReportsTable } from "@/components/reports-table";
import { getReports } from "@/app/actions/reports";

async function DelayedData({ children }: { children: React.ReactNode }) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return children;
}
export default async function Home() {
  const response = await getReports();
  const reports = response?.reports || [];
  
  return (
    <div className="space-y-4">
        <h1 className="text-2xl font-bold">Reports Dashboard</h1>
        <div className="rounded-lg border bg-card">
          <DelayedData>
            <ReportsTable initialData={reports} />
          </DelayedData>
        </div>
      </div>
  );
}