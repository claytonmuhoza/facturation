import HeaderDashboard from "@/component/layout/DashboardHeader";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Facturation OBR - Dashboard",
  description:
    "Tableau de bord de l'application de facturation électronique de l'OBR",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full">
      <HeaderDashboard />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
