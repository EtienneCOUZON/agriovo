import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Scaling,
  Eye,
  Package,
  Printer,
  Building2,
  Wrench,
  Shield,
  Target,
  SlidersHorizontal,
  FileCheck,
  Phone,
  Mail,
  ArrowRight,
  ClipboardList,
  Cog,
  Layers,
  Truck,
  Headset,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Agriovo | Intégrateur de centres de conditionnement des œufs",
  description:
    "Bureau d'études spécialisé dans l'intégration de centres de conditionnement des œufs. Calibreuses, mireuses, convoyeurs et solutions clé en main.",
};

const solutionIcons = [Scaling, Eye, Package, Printer, Building2, Wrench];

const featuredMachines = [
  {
    name: "Centre de conditionnement 200 000 œufs/heure",
    reference: "PLE200K",
    capacity: "200 000 œufs/h",
    price: 84100,
    slug: "centres-complets/centre-conditionnement-200000-oeufs-heure",
    image:
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510",
    shortDescription:
      "Solution industrielle complète intégrant calibreuse, mireuse, convoyeurs, marquage et emballage automatisé.",
  },
  {
    name: "Centre de conditionnement 25 000 œufs/heure",
    reference: "PLE25K",
    capacity: "25 000 œufs/h",
    price: 29540,
    slug: "centres-complets/centre-conditionnement-25000-oeufs-heure",
    image:
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_de_conditionnement_des_oeufs.png?v=1771537133",
    shortDescription:
      "Solution compacte idéale pour les éleveurs souhaitant internaliser le conditionnement.",
  },
  {
    name: "Calibreuse œufs IntelEgg1400",
    reference: "IntelEgg1400",
    capacity: "5 400 œufs/h",
    price: 5420,
    slug: "calibreuses/calibreuse-oeufs-intelegg1400",
    image:
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse.jpg?v=1772706459",
    shortDescription:
      "Calibreuse mireuse robuste avec tri automatique par poids et mirage intégré.",
  },
  {
    name: "Imprimante à œufs EggTech4000",
    reference: "EggTech4000",
    capacity: "6 300 œufs/h",
    price: 5750,
    slug: "impression-marquage/imprimante-oeufs-eggtech4000",
    image:
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_4.png?v=1773317424",
    shortDescription:
      "Tamponneuse professionnelle conforme aux exigences de traçabilité DDPP.",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "Étude de faisabilité",
    description:
      "Analyse de vos besoins, capacité de production, contraintes réglementaires et budget pour définir le projet idéal.",
  },
  {
    icon: SlidersHorizontal,
    title: "Conception sur-mesure",
    description:
      "Plans techniques, choix des équipements, dimensionnement de la ligne et validation avec notre bureau d'études.",
  },
  {
    icon: Cog,
    title: "Intégration des équipements",
    description:
      "Sélection et configuration de chaque machine : calibreuse, mireuse, imprimante, convoyeurs et emballage.",
  },
  {
    icon: Truck,
    title: "Installation sur site",
    description:
      "Livraison, montage, raccordement électrique et mise en place de l'ensemble de la ligne de conditionnement.",
  },
  {
    icon: Layers,
    title: "Mise en service & formation",
    description:
      "Tests, réglages, validation des performances et formation complète de votre personnel à l'utilisation des machines.",
  },
  {
    icon: Headset,
    title: "Maintenance & SAV",
    description:
      "Contrats de maintenance préventive, assistance téléphonique, pièces détachées et interventions rapides.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agriovo",
    url: "https://www.agriovo-centre-conditionnement.fr",
    logo: "https://www.agriovo-centre-conditionnement.fr/images/logo.png",
    description:
      "Bureau d'études spécialisé dans l'intégration de centres de conditionnement des œufs. Calibreuses, mireuses, convoyeurs et solutions clé en main.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 rue de la filature",
      addressLocality: "Villeurbanne",
      postalCode: "69100",
      addressCountry: "FR",
    },
    telephone: "+33767104277",
    email: "info@agriovo-centre-conditionnement.fr",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    sameAs: [],
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-[#0f2744]">
        <Image
          src="https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510"
          alt="Centre de conditionnement des œufs industriel"
          fill
          className="object-cover opacity-30"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2744] via-[#0f2744]/90 to-[#0f2744]/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Intégrateur de centres de conditionnement des{" "}
              <span className="text-[#e8772e]">œufs</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200 sm:text-xl">
              De l&apos;étude de faisabilité à la mise en service, Agriovo
              conçoit et intègre votre ligne de conditionnement sur mesure.
              Calibreuses, mireuses, convoyeurs, marquage — de 300 œufs/jour à
              200 000 œufs/heure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/solutions" size="lg">
                Découvrir nos solutions
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#0f2744]"
              >
                Demander un devis
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#e8772e]">13+</p>
              <p className="mt-1 text-sm font-medium text-gray-300">
                Machines disponibles
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#e8772e]">6</p>
              <p className="mt-1 text-sm font-medium text-gray-300">
                Solutions adaptées
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-[#e8772e]">De A à Z</p>
              <p className="mt-1 text-sm font-medium text-gray-300">
                Accompagnement complet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION SECTION (SEO RICH TEXT) ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0f2744] md:text-4xl">
              Votre partenaire pour le conditionnement des œufs
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#e8772e]" />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              <p>
                <strong>Agriovo</strong> est un{" "}
                <Link
                  href="/bureau-etudes"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  bureau d&apos;études
                </Link>{" "}
                spécialisé dans l&apos;intégration de{" "}
                <strong>centres de conditionnement des œufs</strong>. Nous
                accompagnons les éleveurs, coopératives agricoles et industriels
                de l&apos;œuf dans la conception, l&apos;installation et la mise
                en service de leurs lignes de conditionnement. Notre expertise
                couvre l&apos;ensemble de la chaîne : du{" "}
                <Link
                  href="/solutions/calibrage"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  calibrage
                </Link>{" "}
                au{" "}
                <Link
                  href="/solutions/conditionnement-emballage"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  conditionnement et emballage
                </Link>
                , en passant par le{" "}
                <Link
                  href="/solutions/mirage"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  mirage
                </Link>{" "}
                et le{" "}
                <Link
                  href="/solutions/marquage-tracabilite"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  marquage des œufs
                </Link>
                .
              </p>
              <p>
                Que vous soyez un éleveur de 250 poules souhaitant vous mettre
                en conformité avec les normes DDPP, ou un centre de
                conditionnement industriel traitant 200 000 œufs par heure, nous
                proposons des{" "}
                <Link
                  href="/solutions"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  solutions sur-mesure
                </Link>{" "}
                adaptées à chaque capacité de production. Nos{" "}
                <Link
                  href="/machines"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  calibreuses, mireuses, imprimantes à œufs
                </Link>{" "}
                et convoyeurs sont sélectionnés pour leur fiabilité, leur
                précision et leur conformité aux normes européennes en vigueur.
              </p>
              <p>
                Basé à Villeurbanne (69), Agriovo intervient sur l&apos;ensemble
                du territoire français. Notre{" "}
                <Link
                  href="/bureau-etudes"
                  className="font-semibold text-[#e8772e] underline decoration-[#e8772e]/30 hover:decoration-[#e8772e]"
                >
                  bureau d&apos;études
                </Link>{" "}
                prend en charge l&apos;étude de faisabilité, la conception des
                plans, le choix des équipements, la construction du bâtiment si
                nécessaire, l&apos;installation des machines et la formation de
                votre personnel. Un interlocuteur unique pour un projet clé en
                main, de la première étude à la maintenance continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos solutions de conditionnement"
            subtitle="Des solutions complètes pour le conditionnement des œufs, du calibrage à la ligne clé en main."
            centered
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#e8772e]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f2744]/5 text-[#0f2744] transition-colors group-hover:bg-[#e8772e]/10 group-hover:text-[#e8772e]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0f2744]">
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {solution.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#e8772e]">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED MACHINES SECTION ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos machines de conditionnement des œufs"
            subtitle="Calibreuses, mireuses, imprimantes et centres complets : découvrez nos équipements professionnels."
            centered
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMachines.map((machine) => (
              <Link
                key={machine.reference}
                href={`/machines/${machine.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#e8772e]/30"
              >
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold leading-snug text-[#0f2744] group-hover:text-[#e8772e] transition-colors">
                    {machine.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {machine.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0f2744]">
                      {machine.capacity}
                    </span>
                    <span className="text-sm font-bold text-[#e8772e]">
                      {machine.price.toLocaleString("fr-FR")} € HT
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#e8772e]">
                    Voir la fiche
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/machines" size="lg">
              Voir tout le catalogue
            </Button>
          </div>
        </div>
      </section>

      {/* ===== WHY AGRIOVO SECTION ===== */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Pourquoi choisir Agriovo ?"
            subtitle="Un bureau d'études dédié au conditionnement des œufs, à votre service de A à Z."
            centered
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Expertise technique",
                description:
                  "Notre équipe maîtrise l'ensemble des technologies du conditionnement des œufs : calibrage par pesée, mirage automatique, impression jet d'encre alimentaire et convoyage. Un savoir-faire technique pointu au service de votre production.",
              },
              {
                icon: SlidersHorizontal,
                title: "Sur-mesure",
                description:
                  "Chaque centre de conditionnement est unique. Nous concevons des lignes adaptées à votre capacité, vos contraintes d'espace et votre budget. De 300 œufs par jour à 200 000 œufs par heure, nous dimensionnons la solution idéale.",
              },
              {
                icon: FileCheck,
                title: "Conformité réglementaire",
                description:
                  "Nos installations respectent les normes DDPP, les réglementations européennes de commercialisation des œufs et les exigences sanitaires. Marquage conforme, traçabilité complète et documentation réglementaire incluse.",
              },
              {
                icon: Shield,
                title: "SAV réactif",
                description:
                  "Un interlocuteur unique, une assistance téléphonique disponible et des interventions rapides sur site. Contrats de maintenance préventive, pièces détachées et mises à jour logicielles pour assurer la continuité de votre production.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8772e]/10 text-[#e8772e]">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0f2744]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre méthode de travail"
            subtitle="Un processus éprouvé pour garantir le succès de votre projet de centre de conditionnement des œufs."
            centered
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0f2744] text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e8772e]">
                      Étape {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#0f2744]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/bureau-etudes" size="lg" variant="secondary">
              En savoir plus sur notre bureau d&apos;études
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#0f2744] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vous avez un projet de centre de conditionnement ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Que vous souhaitiez créer un nouveau centre de conditionnement des
            œufs, moderniser votre ligne existante ou simplement ajouter une
            calibreuse ou une mireuse, notre équipe est à votre écoute pour
            étudier votre projet.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="tel:0767104277"
              className="flex items-center gap-2 text-xl font-bold text-[#e8772e] hover:text-[#e8772e]/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              07 67 10 42 77
            </a>
            <a
              href="mailto:info@agriovo-centre-conditionnement.fr"
              className="flex items-center gap-2 text-xl font-bold text-[#e8772e] hover:text-[#e8772e]/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              info@agriovo-centre-conditionnement.fr
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis gratuit
            </Button>
            <Button
              href="/entreprise"
              size="lg"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#0f2744]"
            >
              Découvrir Agriovo
            </Button>
          </div>
        </div>
      </section>

      {/* ===== JSON-LD STRUCTURED DATA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
