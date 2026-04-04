import type { Metadata } from "next";
import Link from "next/link";
import { Egg } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import MachinesCatalog from "@/components/MachinesCatalog";
import { categories, machines } from "@/data/machines";

export const metadata: Metadata = {
  title: "Nos machines de conditionnement des oeufs | Agriovo",
  description:
    "Catalogue de 13 machines de conditionnement des oeufs : calibreuses, mireuses, imprimantes, centres complets. De 300 oeufs/jour \u00e0 200 000/heure.",
};

export default function MachinesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Machines" },
          ]}
        />
      </div>

      {/* Header */}
      <section className="bg-white pb-12 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos machines de conditionnement"
            subtitle="13 machines pour toutes vos applications"
            centered
          />
        </div>
      </section>

      {/* Category Cards */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const count = machines.filter(
                (m) => m.categorySlug === category.slug
              ).length;
              return (
                <Link
                  key={category.slug}
                  href={`/machines/${category.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#0f2744] to-[#0f2744]/80">
                    <Egg className="h-12 w-12 text-white/30" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0f2744] group-hover:text-[#e8772e] transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {category.description}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#e8772e]">
                      {count} machine{count > 1 ? "s" : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Catalog with Filters */}
      <MachinesCatalog />
    </>
  );
}
