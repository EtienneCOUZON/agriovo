import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const solutionsLinks = [
  { label: "Calibrage", href: "/solutions/calibrage" },
  { label: "Mirage", href: "/solutions/mirage" },
  { label: "Conditionnement", href: "/solutions/conditionnement" },
  { label: "Marquage", href: "/solutions/marquage" },
  { label: "Batiment", href: "/solutions/batiment" },
  { label: "Ligne complete", href: "/solutions/ligne-complete" },
];

const machinesLinks = [
  { label: "Centres complets", href: "/machines/centres-complets" },
  { label: "Calibreuses", href: "/machines/calibreuses" },
  { label: "Impression", href: "/machines/impression" },
  { label: "Equipements", href: "/machines/equipements" },
];

const entrepriseLinks = [
  { label: "A propos", href: "/entreprise" },
  { label: "Bureau d'etudes", href: "/bureau-etudes" },
  { label: "Installation", href: "/installation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Carrieres", href: "/carrieres" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-[#e8772e] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f2744]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div>
            <Link href="/">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                AGRIOVO
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Integrateur de centres de conditionnement des oeufs. Conception,
              installation et maintenance de lignes completes.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:0767104277"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#e8772e] transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  07 67 10 42 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@agriovo-centre-conditionnement.fr"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#e8772e] transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@agriovo-centre-conditionnement.fr
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  35 rue de la filature, 69100 Villeurbanne
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <FooterColumn title="Solutions" links={solutionsLinks} />

          {/* Column 3 - Machines */}
          <FooterColumn title="Machines" links={machinesLinks} />

          {/* Column 4 - Entreprise */}
          <FooterColumn title="Entreprise" links={entrepriseLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            &copy; 2024 Agriovo. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Mentions legales
            </Link>
            <Link
              href="/cgv"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
