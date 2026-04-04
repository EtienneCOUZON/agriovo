import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Mentions légales | Agriovo",
  description: "Mentions légales du site Agriovo : éditeur, hébergeur, propriété intellectuelle, protection des données personnelles et politique de cookies.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Mentions légales" />

          <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
            {/* Éditeur */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                1. Éditeur du site
              </h2>
              <div className="mt-3 space-y-1">
                <p>
                  <strong>Raison sociale :</strong> Agriovo
                </p>
                <p>
                  <strong>Adresse :</strong> 35 rue de la filature, 69100
                  Villeurbanne
                </p>
                <p>
                  <strong>Téléphone :</strong> 07 67 10 42 77
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  info@agriovo-centre-conditionnement.fr
                </p>
                <p>
                  <strong>SIRET :</strong> [À compléter]
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> [À compléter]
                </p>
              </div>
            </div>

            {/* Hébergeur */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                2. Hébergement
              </h2>
              <div className="mt-3 space-y-1">
                <p>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina,
                  CA 91723, États-Unis
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8772e] hover:underline"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                3. Propriété intellectuelle
              </h2>
              <p className="mt-3">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos,
                icônes, sons, logiciels, etc.) est la propriété exclusive
                d'Agriovo ou de ses partenaires et est protégé par les lois
                françaises et internationales relatives à la propriété
                intellectuelle. Toute reproduction, représentation, modification,
                publication, adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite sauf
                autorisation écrite préalable d'Agriovo.
              </p>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                4. Protection des données personnelles
              </h2>
              <p className="mt-3">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978
                modifiée, vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition aux données personnelles vous
                concernant. Pour exercer ces droits, vous pouvez nous contacter
                à l'adresse : info@agriovo-centre-conditionnement.fr
              </p>
              <p className="mt-3">
                Les informations collectées via le formulaire de contact sont
                destinées uniquement au traitement de votre demande et ne sont
                pas transmises à des tiers.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">5. Cookies</h2>
              <p className="mt-3">
                Ce site peut utiliser des cookies à des fins de mesure
                d'audience et d'amélioration de l'expérience utilisateur. Vous
                pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                6. Limitation de responsabilité
              </h2>
              <p className="mt-3">
                Agriovo s'efforce d'assurer au mieux l'exactitude et la mise à
                jour des informations diffusées sur ce site. Toutefois, Agriovo
                ne peut garantir l'exactitude, la précision ou l'exhaustivité
                des informations mises à disposition sur ce site. Agriovo
                décline toute responsabilité pour les éventuelles imprécisions,
                inexactitudes ou omissions portant sur des informations
                disponibles sur ce site.
              </p>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                7. Droit applicable
              </h2>
              <p className="mt-3">
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
