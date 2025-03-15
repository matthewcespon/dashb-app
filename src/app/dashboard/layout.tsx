"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"
import { useTheme } from 'next-themes';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  
  return (
    <SidebarProvider>
      <div className={`min-h-screen bg-gradient-to-b from-${resolvedTheme === 'dark' ? 'neutral-900' : 'neutral-200'} to-${resolvedTheme === 'dark' ? 'neutral-950' : 'neutral-400'}`}>
        <div className="flex">
          <AppSidebar />
          <main className="flex-grow p-6">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}