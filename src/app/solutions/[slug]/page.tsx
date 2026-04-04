import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { solutions, getSolutionBySlug } from "@/data/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution introuvable | Agriovo" };
  }

  return {
    title: `${solution.name} | Agriovo`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: solution.name },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-[#0f2744] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {solution.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            {solution.description}
          </p>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle title="Présentation" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {solution.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-6 text-xl font-bold text-[#0f2744]">
                Points clés
              </h3>
              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8772e] text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2744] md:text-3xl">
            Vous avez un projet de {solution.name.toLowerCase()} ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Contactez-nous pour une étude personnalisée. Notre bureau d'études
            vous accompagne de A à Z.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Demander un devis</Button>
            <Button href="/bureau-etudes" variant="secondary">
              Notre bureau d'études
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
