import { Metadata } from "next";
import { PlateformeProvider } from "@/context/PlateformeContext";
import PlateformeHeader from "./components/PlateformeHeader";
import PlateformeFooter from "./components/PlateformeFooter";

export const metadata: Metadata = {
  title: "Agriovo Plateforme - De l'œuf à l'agrément",
  description:
    "Plateforme de guidage vers l'agrément sanitaire d'un centre de conditionnement d'œufs en France. Checklist interactive, profil exploitation, suivi personnalisé.",
};

export default function PlateformeLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlateformeProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAF5]">
        <PlateformeHeader />
        <main className="flex-1">{children}</main>
        <PlateformeFooter />
      </div>
    </PlateformeProvider>
  );
}
