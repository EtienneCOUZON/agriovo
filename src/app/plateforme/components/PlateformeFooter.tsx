import Link from "next/link";

export default function PlateformeFooter() {
  return (
    <footer className="bg-[#2D5016] text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Agriovo</h3>
            <p className="text-sm leading-relaxed">
              La plateforme qui vous accompagne de l&apos;œuf à l&apos;agrément sanitaire de votre
              centre de conditionnement.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Plateforme
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plateforme" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/plateforme/profil" className="hover:text-white transition-colors">
                  Créer mon profil
                </Link>
              </li>
              <li>
                <Link href="/plateforme/checklist" className="hover:text-white transition-colors">
                  Checklist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Agriovo
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Site principal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Agriovo. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
