import NavBar from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="flex-grow p-6">
        <NavBar visible="logo" className="absolute"/>
        {children}
      </main>
  );
}