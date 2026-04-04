"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Funnel } from "lucide-react";
import Button from "@/components/ui/Button";
import { categories, machines } from "@/data/machines";

const capacityRanges = [
  { label: "Toutes capacites", min: 0, max: Infinity },
  { label: "Moins de 5 000/h", min: 0, max: 4999 },
  { label: "5 000 - 25 000/h", min: 5000, max: 25000 },
  { label: "25 000 - 100 000/h", min: 25001, max: 100000 },
  { label: "Plus de 100 000/h", min: 100001, max: Infinity },
];

export default function MachinesCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  const filteredMachines = useMemo(() => {
    return machines.filter((m) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(m.categorySlug)
      ) {
        return false;
      }
      const range = capacityRanges[selectedCapacity];
      if (m.capacityNumber < range.min || m.capacityNumber > range.max) {
        return false;
      }
      return true;
    });
  }, [selectedCategories, selectedCapacity]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0f2744]">
            Catalogue complet
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#0f2744] transition-colors hover:bg-gray-50 lg:hidden cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Funnel className="h-4 w-4" />
            Filtres
          </button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside
            className={`w-full shrink-0 lg:w-64 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0f2744]">
                Categories
              </h3>
              <div className="mt-4 space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.slug}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.slug)}
                      onChange={() => toggleCategory(category.slug)}
                      className="h-4 w-4 rounded border-gray-300 text-[#e8772e] focus:ring-[#e8772e]"
                    />
                    <span className="text-sm text-gray-700">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#0f2744]">
                Capacite
              </h3>
              <div className="mt-4 space-y-2">
                {capacityRanges.map((range, index) => (
                  <button
                    key={range.label}
                    type="button"
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
                      selectedCapacity === index
                        ? "bg-[#e8772e] text-white font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCapacity(index)}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Machine Grid */}
          <div className="flex-1">
            {filteredMachines.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 py-16">
                <div className="h-12 w-12 text-gray-300" />
                <p className="mt-4 text-gray-500">
                  Aucune machine ne correspond a vos criteres.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-[#e8772e] hover:underline cursor-pointer"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedCapacity(0);
                  }}
                >
                  Reinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredMachines.map((machine) => (
                  <div
                    key={machine.id}
                    className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50">
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        unoptimized
                        className="object-contain p-4"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#e8772e]">
                        {machine.category}
                      </p>
                      <h3 className="mt-1 font-bold text-[#0f2744] group-hover:text-[#e8772e] transition-colors">
                        {machine.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        Ref. {machine.reference}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {machine.capacity}
                      </p>
                      <p className="mt-3 text-lg font-bold text-[#0f2744]">
                        {machine.price.toLocaleString("fr-FR")} € HT
                      </p>
                      <div className="mt-4">
                        <Button
                          href={`/machines/${machine.categorySlug}/${machine.slug}`}
                          size="sm"
                          className="w-full"
                        >
                          Voir le produit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
