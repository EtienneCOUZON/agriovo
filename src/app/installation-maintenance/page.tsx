import type { Metadata } from "next";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Package,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Installation & Maintenance | Agriovo",
  description:
    "Installation et maintenance de vos équipements de conditionnement des oeufs. SAV réactif sous 24h, pièces détachées et contrats sur mesure.",
};

const installationFeatures = [
  "Montage et raccordement de vos équipements",
  "Intégration dans votre environnement existant",
  "Tests de fonctionnement et validation",
  "Formation de vos opérateurs",
  "Documentation technique complète",
];

const maintenanceFeatures = [
  "Maintenance préventive programmée",
  "Maintenance curative et dépannage",
  "Service après-vente réactif",
  "Pièces détachées disponibles",
  "Contrats de maintenance sur-mesure",
];

const keyFigures = [
  {
    icon: Clock,
    value: "< 24h",
    label: "Temps de réponse SAV",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Taux de disponibilité",
  },
  {
    icon: Package,
    value: "Stock",
    label: "Pièces détachées disponibles",
  },
  {
    icon: PhoneCall,
    value: "6j/7",
    label: "Support technique",
  },
];

export default function InstallationMaintenancePage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Installation & Maintenance" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-[#0f2744] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Installation & Maintenance
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Un service complet pour garantir la performance et la longévité de
            vos équipements de conditionnement.
          </p>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                title="Installation"
                subtitle="Nous assurons le montage, le raccordement et l'intégration de vos équipements de conditionnement dans votre environnement de production."
              />
              <ul className="mt-8 space-y-4">
                {installationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e8772e]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-[#0f2744]/5 p-12">
              <Wrench className="h-32 w-32 text-[#0f2744]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex items-center justify-center rounded-2xl bg-[#0f2744]/5 p-12 lg:order-1">
              <ShieldCheck className="h-32 w-32 text-[#0f2744]/20" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                title="Maintenance"
                subtitle="Préventive ou curative, notre service de maintenance assure le bon fonctionnement de vos lignes de conditionnement."
              />
              <ul className="mt-8 space-y-4">
                {maintenanceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e8772e]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos engagements"
            subtitle="Des chiffres qui témoignent de notre réactivité et de notre engagement."
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {keyFigures.map((figure, index) => {
              const Icon = figure.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-8 w-8 text-[#e8772e]" />
                  <p className="mt-4 text-3xl font-bold text-[#0f2744]">
                    {figure.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{figure.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Besoin d'une intervention ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Notre équipe technique est disponible pour répondre à vos besoins
            d'installation ou de maintenance.
          </p>
          <div className="mt-8">
            <Button href="/contact">Contactez notre SAV</Button>
          </div>
        </div>
      </section>
    </>
  );
}
