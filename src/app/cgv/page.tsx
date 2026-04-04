import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Agriovo",
  description:
    "Conditions générales de vente Agriovo : devis, commandes, prix, paiement, livraison, garantie et SAV pour les équipements de conditionnement.",
};

export default function CGVPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Conditions Générales de Vente" },
          ]}
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Conditions Générales de Vente" />

          <div className="mt-10 space-y-10 text-gray-700 leading-relaxed">
            {/* Article 1 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 1 - Champ d'application
              </h2>
              <p className="mt-3">
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à
                toutes les ventes d'équipements et prestations de services
                conclues par Agriovo, 35 rue de la filature, 69100 Villeurbanne,
                auprès de ses clients professionnels. Toute commande implique
                l'acceptation sans réserve des présentes CGV.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 2 - Devis et commandes
              </h2>
              <p className="mt-3">
                Nos offres de prix sont valables 30 jours à compter de leur
                émission, sauf indication contraire. Toute commande n'est
                définitive qu'après acceptation écrite par Agriovo et réception
                de l'acompte convenu. Les modifications de commande doivent
                faire l'objet d'un avenant écrit accepté par les deux parties.
              </p>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 3 - Prix
              </h2>
              <p className="mt-3">
                Les prix sont exprimés en euros hors taxes (HT). La TVA
                applicable est celle en vigueur au jour de la facturation. Les
                frais de transport et d'installation sont facturés en sus, sauf
                mention contraire dans le devis.
              </p>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 4 - Conditions de paiement
              </h2>
              <p className="mt-3">
                Sauf conditions particulières convenues par écrit, les modalités
                de paiement sont les suivantes : 30% à la commande, 40% à la
                livraison, 30% à la mise en service. Les factures sont payables
                à 30 jours date de facture. Tout retard de paiement entraîne de
                plein droit l'application de pénalités de retard au taux de
                trois fois le taux d'intérêt légal, ainsi qu'une indemnité
                forfaitaire de 40 euros pour frais de recouvrement.
              </p>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 5 - Délais de livraison
              </h2>
              <p className="mt-3">
                Les délais de livraison sont donnés à titre indicatif. Un retard
                de livraison ne peut donner lieu à aucune pénalité, indemnité ou
                annulation de commande, sauf accord préalable écrit. Agriovo
                s'engage néanmoins à informer le client de tout retard
                significatif.
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 6 - Réception et réserves
              </h2>
              <p className="mt-3">
                Le client doit vérifier l'état des équipements à la livraison et
                formuler toute réserve motivée sur le bon de livraison. Toute
                réclamation doit être adressée par lettre recommandée avec accusé
                de réception dans les 8 jours suivant la livraison.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 7 - Garantie
              </h2>
              <p className="mt-3">
                Les équipements fournis bénéficient d'une garantie pièces et
                main-d'oeuvre de 12 mois à compter de la mise en service, sauf
                conditions particulières. La garantie ne couvre pas l'usure
                normale, les dommages résultant d'une mauvaise utilisation, d'un
                défaut d'entretien ou d'une intervention par un tiers non
                autorisé.
              </p>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 8 - Réserve de propriété
              </h2>
              <p className="mt-3">
                Agriovo se réserve la propriété des équipements vendus jusqu'au
                paiement intégral du prix. Le transfert des risques s'opère dès
                la livraison.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 9 - Responsabilité
              </h2>
              <p className="mt-3">
                La responsabilité d'Agriovo ne saurait être engagée pour tout
                dommage indirect, perte d'exploitation ou manque à gagner. En
                tout état de cause, la responsabilité d'Agriovo est limitée au
                montant de la commande concernée.
              </p>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="text-xl font-bold text-[#0f2744]">
                Article 10 - Litiges
              </h2>
              <p className="mt-3">
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les parties s'efforceront de trouver une solution
                amiable. À défaut, les tribunaux de Lyon seront seuls
                compétents.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : Avril 2026. Ces conditions générales de
                vente sont susceptibles d'être modifiées à tout moment. La
                version applicable est celle en vigueur à la date de la
                commande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
