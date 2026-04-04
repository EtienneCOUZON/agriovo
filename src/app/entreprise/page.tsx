import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  ArrowRightLeft,
  Cpu,
  Award,
  Shield,
  Users,
  Lightbulb,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Notre entreprise | Agriovo",
  description:
    "Agriovo, intégrateur de centres de conditionnement des oeufs basé à Villeurbanne. Expertise, qualité et accompagnement sur mesure.",
};

const stats = [
  { icon: MapPin, value: "France entière", label: "Zone d'intervention" },
  { icon: ArrowRightLeft, value: "De A à Z", label: "Accompagnement complet" },
  { icon: Cpu, value: "13+", label: "Machines intégrées" },
];

const values = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Une connaissance approfondie du secteur de la production et du conditionnement des oeufs.",
  },
  {
    icon: Shield,
    title: "Qualité",
    description:
      "Des équipements sélectionnés auprès des meilleurs fabricants européens.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
      "Un interlocuteur unique de l'étude à la mise en service et au-delà.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Une veille permanente sur les nouvelles technologies de conditionnement.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Entreprise" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-[#0f2744] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Notre Expertise au Service de Votre Performance
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Intégrateur de centres de conditionnement des oeufs depuis
            Villeurbanne, nous accompagnons les producteurs dans toute la France.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8772e] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#0f2744]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle title="Qui sommes-nous ?" />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Agriovo est le partenaire de r&eacute;f&eacute;rence pour le conditionnement
                  des oeufs en France. Bas&eacute; &agrave; Villeurbanne, notre{" "}
                  <Link href="/bureau-etudes" className="text-[#e8772e] hover:underline font-medium">
                    bureau d&apos;&eacute;tudes sp&eacute;cialis&eacute;
                  </Link>{" "}
                  con&ccedil;oit des{" "}
                  <Link href="/solutions" className="text-[#e8772e] hover:underline font-medium">
                    solutions sur-mesure
                  </Link>{" "}
                  pour les producteurs de toutes tailles.
                </p>
                <p>
                  De la petite exploitation familiale au centre industriel, nous
                  ma&icirc;trisons l&apos;ensemble de la cha&icirc;ne : &eacute;tude de faisabilit&eacute;,
                  conception, s&eacute;lection des{" "}
                  <Link href="/machines" className="text-[#e8772e] hover:underline font-medium">
                    &eacute;quipements
                  </Link>, construction du
                  b&acirc;timent, installation, mise en service et maintenance.
                </p>
                <p>
                  Notre expertise couvre toutes les &eacute;tapes du conditionnement :{" "}
                  <Link href="/solutions/calibrage" className="text-[#e8772e] hover:underline">calibrage</Link>,{" "}
                  <Link href="/solutions/mirage" className="text-[#e8772e] hover:underline">mirage</Link>,{" "}
                  <Link href="/solutions/marquage-tracabilite" className="text-[#e8772e] hover:underline">marquage</Link>,{" "}
                  <Link href="/solutions/conditionnement-emballage" className="text-[#e8772e] hover:underline">emballage</Link>{" "}
                  et palettisation. Un interlocuteur unique pour un projet cl&eacute; en main.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#0f2744]/5 p-16">
              <div className="text-center">
                <p className="text-6xl font-bold text-[#0f2744]">Agriovo</p>
                <p className="mt-2 text-lg text-gray-500">
                  Intégrateur de centres de conditionnement des oeufs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos valeurs"
            subtitle="Les principes qui guident notre action au quotidien."
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0f2744] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0f2744]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0f2744] p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Notre engagement
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Nous nous engageons à fournir des solutions de conditionnement
                fiables, performantes et conformes aux normes en vigueur. Chaque
                projet est unique et bénéficie d'un suivi personnalisé, de
                l'étude initiale à la maintenance à long terme.
              </p>
              <div className="mt-8">
                <Button href="/contact">Parlons de votre projet</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
