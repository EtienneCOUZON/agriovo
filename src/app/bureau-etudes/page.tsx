import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  Ruler,
  Cog,
  Building2,
  Wrench,
  PlayCircle,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { machines } from "@/data/machines";

export const metadata: Metadata = {
  title: "Bureau d'études | Agriovo",
  description:
    "Bureau d'études spécialisé dans le conditionnement des oeufs. Conception sur mesure, installation et mise en service de votre centre de conditionnement.",
};

const steps = [
  {
    number: 1,
    title: "Définition du besoin",
    description:
      "Analyse de votre production, vos contraintes et vos objectifs",
    icon: ClipboardList,
  },
  {
    number: 2,
    title: "Étude et conception",
    description:
      "Plans 2D/3D, dimensionnement, choix des équipements",
    icon: Ruler,
  },
  {
    number: 3,
    title: "Sélection des équipements",
    description:
      "Calibreuses, mireuses, convoyeurs adaptés à votre besoin",
    icon: Cog,
  },
  {
    number: 4,
    title: "Plans du bâtiment",
    description:
      "Conception du local de conditionnement conforme aux normes",
    icon: Building2,
  },
  {
    number: 5,
    title: "Installation",
    description:
      "Montage, raccordement et intégration des équipements",
    icon: Wrench,
  },
  {
    number: 6,
    title: "Mise en service",
    description: "Tests, réglages et validation de la ligne",
    icon: PlayCircle,
  },
  {
    number: 7,
    title: "Suivi et maintenance",
    description:
      "SAV réactif, contrats de maintenance, pièces détachées",
    icon: HeadphonesIcon,
  },
];

export default function BureauEtudesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Bureau d'études" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-[#0f2744] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Notre bureau d'études à votre service
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            De la définition de votre besoin à la mise en service de votre
            centre de conditionnement, nous vous accompagnons à chaque étape.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre méthodologie"
            subtitle="Un processus éprouvé en 7 étapes pour garantir la réussite de votre projet."
            centered
          />

          <div className="mt-16 space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-start gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#e8772e]/30 sm:flex-row sm:items-center"
                >
                  {/* Number badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8772e] text-xl font-bold text-white">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f2744]/5 text-[#0f2744]">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0f2744]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {step.number === 3 ? (
                        <>
                          <Link href="/machines/calibreuses" className="text-[#e8772e] hover:underline">Calibreuses</Link>,{" "}
                          <Link href="/solutions/mirage" className="text-[#e8772e] hover:underline">mireuses</Link>,{" "}
                          convoyeurs adapt&eacute;s &agrave; votre besoin
                        </>
                      ) : step.number === 4 ? (
                        <>
                          Conception du{" "}
                          <Link href="/solutions/batiment" className="text-[#e8772e] hover:underline">local de conditionnement</Link>{" "}
                          conforme aux normes
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inline link to solutions */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="text-lg text-gray-700">
              D&eacute;couvrez l&rsquo;ensemble de{" "}
              <Link href="/solutions" className="font-semibold text-[#e8772e] hover:underline">
                nos solutions de conditionnement
              </Link>{" "}
              adapt&eacute;es &agrave; chaque &eacute;tape de votre production.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Machines */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos machines recommand&eacute;es"
            subtitle="Les machines les plus utilis&eacute;es dans nos projets de centres de conditionnement."
            centered
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {machines
              .filter((m) =>
                ["ple25k", "intelegg1400", "eggtech4000", "eggroom20"].includes(m.id)
              )
              .map((machine) => (
                <Link
                  key={machine.id}
                  href={`/machines/${machine.categorySlug}/${machine.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      unoptimized
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#0f2744] group-hover:text-[#e8772e] transition-colors text-sm">
                      {machine.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{machine.capacity}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#e8772e]">
                      Voir le produit
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/machines">Voir tout le catalogue</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Vous avez un projet ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Prenez rendez-vous avec notre bureau d&apos;&eacute;tudes pour une &eacute;tude
            gratuite et sans engagement de votre projet de conditionnement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Contactez-nous</Button>
            <Button
              href="tel:0767104277"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#0f2744]"
            >
              07 67 10 42 77
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
