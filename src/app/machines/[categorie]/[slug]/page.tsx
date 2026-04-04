import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Check,
  Phone,
  MessageCircle,
  ArrowRight,
  Package,
  Wrench,
  ShieldCheck,
  Truck,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProductGallery from "@/components/ProductGallery";
import FaqAccordion from "@/components/FaqAccordion";
import {
  machines,
  categories,
  getMachineBySlug,
  getSimilarMachines,
} from "@/data/machines";
import { solutions } from "@/data/solutions";

type Props = {
  params: Promise<{ categorie: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);

  if (!machine) {
    return { title: "Machine introuvable | Agriovo" };
  }

  const description = `${machine.name} (${machine.reference}) - ${machine.shortDescription}. Prix : ${machine.price.toLocaleString("fr-FR")} EUR HT. Livraison et installation sur site.`;

  return {
    title: `${machine.name} - ${machine.reference} | Agriovo`,
    description: description.slice(0, 150),
  };
}

export function generateStaticParams() {
  return machines.map((m) => ({
    categorie: m.categorySlug,
    slug: m.slug,
  }));
}

export default async function MachineDetailPage({ params }: Props) {
  const { categorie, slug } = await params;
  const machine = getMachineBySlug(slug);

  if (!machine || machine.categorySlug !== categorie) {
    notFound();
  }

  const category = categories.find((c) => c.slug === machine.categorySlug);
  const similar = getSimilarMachines(machine, 3);

  const allImages = [machine.image, ...machine.gallery].filter(Boolean);

  const longDescription = machine.longDescription;
  const includedEquipment = machine.includedEquipment ?? [];
  const advantages = machine.advantages ?? [];
  const faq = machine.faq ?? [];
  const relatedSolutionSlugs = machine.relatedSolutions ?? [];

  const relatedSolutions = solutions.filter((s) =>
    relatedSolutionSlugs.includes(s.slug),
  );

  // JSON-LD Product Schema
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: machine.shortDescription,
    image: machine.image,
    sku: machine.reference,
    brand: {
      "@type": "Brand",
      name: "Agriovo",
    },
    offers: {
      "@type": "Offer",
      price: machine.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(
        new Date().getFullYear() + 1,
        0,
        1,
      ).toISOString(),
    },
  };

  // JSON-LD FAQ Schema
  const faqJsonLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Machines", href: "/machines" },
            {
              label: category?.name ?? machine.category,
              href: `/machines/${machine.categorySlug}`,
            },
            { label: machine.name },
          ]}
        />
      </div>

      {/* Product Header - Two Columns */}
      <section className="bg-white pb-12 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left: Image Gallery */}
            <ProductGallery
              mainImage={machine.image}
              gallery={machine.gallery}
              productName={machine.name}
            />

            {/* Right: Info */}
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center rounded-full bg-[#e8772e]/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-[#e8772e]">
                {machine.category}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold text-[#0f2744] sm:text-4xl">
                {machine.name}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Ref. {machine.reference}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {machine.shortDescription}
              </p>
              <p className="mt-6 text-3xl font-extrabold text-[#0f2744]">
                {machine.price.toLocaleString("fr-FR")} € HT
              </p>

              {/* Delivery & Warranty info */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Truck className="h-5 w-5 shrink-0 text-[#0f2744]" />
                  <span className="text-sm">
                    Livraison et installation sur site
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#0f2744]" />
                  <span className="text-sm">Garantie 24 mois</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Demander un devis
                </Button>
                <Button href="tel:0767104277" size="lg" variant="secondary">
                  <Phone className="mr-2 h-4 w-4" />
                  07 67 10 42 77
                </Button>
                <Button
                  href="https://wa.me/33767104277"
                  size="lg"
                  variant="ghost"
                  className="text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
            <Check className="h-6 w-6 text-[#e8772e]" />
            Points forts
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {machine.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8772e]/10">
                  <Check className="h-4 w-4 text-[#e8772e]" />
                </div>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Included Equipment */}
      {includedEquipment.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
              <Package className="h-6 w-6 text-[#e8772e]" />
              Equipements inclus
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {includedEquipment.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 px-5 py-4"
                >
                  <Package className="h-5 w-5 shrink-0 text-[#e8772e]" />
                  <span className="text-sm font-medium text-[#0f2744]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specs */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
            <Wrench className="h-6 w-6 text-[#e8772e]" />
            Caracteristiques techniques
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <tbody>
                {machine.specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-[#0f2744]">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2744]">
            Description detaillee
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {(longDescription || machine.description)
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
            {allImages.length > 1 && (
              <div className="space-y-4">
                {allImages.slice(1, 3).map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50"
                  >
                    <Image
                      src={img}
                      alt={`${machine.name} - detail ${index + 1}`}
                      fill
                      unoptimized
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Advantages */}
      {advantages.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
              <Lightbulb className="h-6 w-6 text-[#e8772e]" />
              Les avantages
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8772e]/10">
                      <Lightbulb className="h-5 w-5 text-[#e8772e]" />
                    </div>
                    <h3 className="font-bold text-[#0f2744]">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
            <ArrowRight className="h-6 w-6 text-[#e8772e]" />
            Applications
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machine.applications.map((app) => (
              <div
                key={app}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-5 py-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f2744]/10">
                  <Check className="h-4 w-4 text-[#0f2744]" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {app}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
              <HelpCircle className="h-6 w-6 text-[#e8772e]" />
              Questions frequentes
            </h2>
            <div className="mt-6 max-w-3xl">
              <FaqAccordion items={faq} />
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions */}
      {relatedSolutions.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0f2744]">
              <Lightbulb className="h-6 w-6 text-[#e8772e]" />
              Solutions associees
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:border-[#e8772e]/30 hover:shadow-md"
                >
                  <h3 className="font-bold text-[#0f2744] transition-colors group-hover:text-[#e8772e]">
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Similar Machines */}
      {similar.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Machines similaires"
              subtitle="Decouvrez d'autres machines de la meme categorie."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((m) => (
                <Link
                  key={m.id}
                  href={`/machines/${m.categorySlug}/${m.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      unoptimized
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0f2744] transition-colors group-hover:text-[#e8772e]">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{m.capacity}</p>
                    <p className="mt-2 text-lg font-bold text-[#0f2744]">
                      {m.price.toLocaleString("fr-FR")} € HT
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#e8772e]">
                      Voir le produit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#0f2744] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interesse par le {machine.name} ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Contactez-nous pour obtenir un devis personnalise et des
            informations complementaires. Livraison et installation sur site,
            garantie 24 mois.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis gratuit
            </Button>
            <Button
              href="tel:0767104277"
              size="lg"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#0f2744]"
            >
              <Phone className="mr-2 h-4 w-4" />
              07 67 10 42 77
            </Button>
            <Button
              href="https://wa.me/33767104277"
              size="lg"
              variant="ghost"
              className="text-green-400 hover:bg-green-900/20"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
