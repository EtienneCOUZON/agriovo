import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Agriovo",
  description:
    "Contactez Agriovo pour votre projet de conditionnement des oeufs. Devis gratuit, étude personnalisée et accompagnement sur mesure en France.",
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contactez-nous"
            subtitle="Une question, un projet ? Remplissez le formulaire ci-dessous ou contactez-nous directement."
            centered
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-lg font-bold text-[#0f2744]">
                  Nos coordonnées
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2744]/5 text-[#0f2744]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0f2744]">Adresse</p>
                      <p className="mt-1 text-sm text-gray-600">
                        35 rue de la filature
                        <br />
                        69100 Villeurbanne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2744]/5 text-[#0f2744]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0f2744]">Téléphone</p>
                      <p className="mt-1 text-sm text-gray-600">
                        <a
                          href="tel:0767104277"
                          className="hover:text-[#e8772e] transition-colors"
                        >
                          07 67 10 42 77
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f2744]/5 text-[#0f2744]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0f2744]">Email</p>
                      <p className="mt-1 text-sm text-gray-600">
                        <a
                          href="mailto:info@agriovo-centre-conditionnement.fr"
                          className="hover:text-[#e8772e] transition-colors break-all"
                        >
                          info@agriovo-centre-conditionnement.fr
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#0f2744] p-8 text-white">
                <h3 className="mb-2 text-lg font-bold">Horaires</h3>
                <p className="text-sm text-gray-300">
                  Lundi - Vendredi : 8h00 - 18h00
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  Samedi - Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
