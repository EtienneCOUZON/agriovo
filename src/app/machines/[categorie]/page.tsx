import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { categories, getMachinesByCategory } from "@/data/machines";

type Props = {
  params: Promise<{ categorie: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorie } = await params;
  const category = categories.find((c) => c.slug === categorie);

  if (!category) {
    return { title: "Categorie introuvable | Agriovo" };
  }

  return {
    title: `${category.name} - Machines de conditionnement | Agriovo`,
    description: `${category.description}. Decouvrez toutes nos machines de la categorie ${category.name} pour le conditionnement des oeufs.`,
  };
}

export function generateStaticParams() {
  return categories.map((c) => ({ categorie: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { categorie } = await params;
  const category = categories.find((c) => c.slug === categorie);

  if (!category) {
    notFound();
  }

  const categoryMachines = getMachinesByCategory(category.slug);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Machines", href: "/machines" },
            { label: category.name },
          ]}
        />
      </div>

      <section className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={category.name}
            subtitle={category.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryMachines.map((machine) => (
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
        </div>
      </section>
    </>
  );
}
