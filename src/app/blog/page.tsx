import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Blog - Actualités & Conseils | Agriovo",
  description:
    "Articles et conseils sur le conditionnement des oeufs : réglementation DDPP, choix des équipements, bonnes pratiques et retours d'expérience.",
};

const articles = [
  {
    title: "Comment choisir sa calibreuse à oeufs ?",
    excerpt:
      "Guide complet pour sélectionner la calibreuse adaptée à votre volume de production et à vos exigences de tri.",
    date: "À venir",
    readTime: "5 min",
    category: "Équipements",
  },
  {
    title: "Les normes DDPP pour le conditionnement des oeufs",
    excerpt:
      "Tout savoir sur la réglementation en vigueur pour la mise en place d'un centre de conditionnement conforme.",
    date: "À venir",
    readTime: "8 min",
    category: "Réglementation",
  },
  {
    title: "Optimiser sa ligne de conditionnement : les bonnes pratiques",
    excerpt:
      "Conseils et retours d'expérience pour améliorer la productivité et réduire les pertes sur votre ligne de conditionnement.",
    date: "À venir",
    readTime: "6 min",
    category: "Bonnes pratiques",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Actualités & conseils"
            subtitle="Articles, guides et retours d'expérience sur le conditionnement des oeufs."
            centered
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="flex h-48 items-center justify-center bg-[#0f2744]/5">
                  <span className="rounded-full bg-[#e8772e]/10 px-4 py-1.5 text-sm font-medium text-[#e8772e]">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-[#0f2744] leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
                      Article à venir
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
