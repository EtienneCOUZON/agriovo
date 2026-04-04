import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Search,
  Package,
  Stamp,
  Building2,
  Settings2,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Nos solutions de conditionnement des oeufs | Agriovo",
  description:
    "Solutions complètes pour le conditionnement des oeufs : calibrage, mirage, emballage, marquage, bâtiment et lignes clé en main sur mesure.",
};

const iconMap: Record<string, React.ElementType> = {
  calibrage: Scale,
  mirage: Search,
  "conditionnement-emballage": Package,
  "marquage-tracabilite": Stamp,
  batiment: Building2,
  "ligne-complete": Settings2,
};

export default function SolutionsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Solutions" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos solutions de conditionnement"
            subtitle="De la calibreuse au centre complet clé en main, nous proposons des solutions adaptées à chaque besoin."
            centered
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.slug] || Settings2;
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#e8772e]/30 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0f2744] text-white transition-colors duration-300 group-hover:bg-[#e8772e]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f2744]">
                    {solution.name}
                  </h3>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#e8772e] group-hover:underline">
                    En savoir plus &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
