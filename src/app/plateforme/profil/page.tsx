"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { usePlateforme } from "@/context/PlateformeContext";
import { ExploitationProfile } from "@/types/plateforme";
import { ArrowRight, Save, CheckCircle2 } from "lucide-react";

const emptyProfile: ExploitationProfile = {
  nomExploitation: "",
  nom: "",
  prenom: "",
  adresse: "",
  codePostal: "",
  ville: "",
  typeProduction: "",
  nombrePoules: "",
  productionJournaliere: "",
  statut: "",
  siret: "",
  email: "",
  motDePasse: "",
};

export default function ProfilPage() {
  const router = useRouter();
  const { state, saveProfile } = usePlateforme();
  const [form, setForm] = useState<ExploitationProfile>(state.profile ?? emptyProfile);
  const [saved, setSaved] = useState(false);

  const update = (field: keyof ExploitationProfile, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveProfile(form);
    setSaved(true);
    setTimeout(() => router.push("/plateforme/checklist"), 800);
  };

  const inputClass =
    "w-full rounded-lg border border-[#2D5016]/20 bg-white px-4 py-2.5 text-sm text-[#2D5016] placeholder:text-[#2D5016]/30 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30 focus:border-[#2D5016]/40 transition-all";
  const labelClass = "block text-sm font-medium text-[#2D5016] mb-1.5";

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016] mb-2">
          {state.isRegistered ? "Mon profil d'exploitation" : "Créer mon profil"}
        </h1>
        <p className="text-sm text-[#2D5016]/60">
          {state.isRegistered
            ? "Modifiez les informations de votre exploitation."
            : "Renseignez les informations de votre exploitation pour commencer le suivi de votre parcours vers l'agrément."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Exploitation */}
        <fieldset className="rounded-2xl border border-[#2D5016]/10 bg-white p-6">
          <legend className="text-base font-bold text-[#2D5016] px-2">Exploitation</legend>
          <div className="space-y-4 mt-2">
            <div>
              <label htmlFor="nomExploitation" className={labelClass}>
                Nom de l&apos;exploitation *
              </label>
              <input
                id="nomExploitation"
                type="text"
                required
                value={form.nomExploitation}
                onChange={(e) => update("nomExploitation", e.target.value)}
                placeholder="Ex : EARL Les Œufs Dorés"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className={labelClass}>Nom *</label>
                <input
                  id="nom"
                  type="text"
                  required
                  value={form.nom}
                  onChange={(e) => update("nom", e.target.value)}
                  placeholder="Dupont"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="prenom" className={labelClass}>Prénom *</label>
                <input
                  id="prenom"
                  type="text"
                  required
                  value={form.prenom}
                  onChange={(e) => update("prenom", e.target.value)}
                  placeholder="Marie"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Adresse */}
        <fieldset className="rounded-2xl border border-[#2D5016]/10 bg-white p-6">
          <legend className="text-base font-bold text-[#2D5016] px-2">Adresse</legend>
          <div className="space-y-4 mt-2">
            <div>
              <label htmlFor="adresse" className={labelClass}>Adresse *</label>
              <input
                id="adresse"
                type="text"
                required
                value={form.adresse}
                onChange={(e) => update("adresse", e.target.value)}
                placeholder="12 chemin des Poules"
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="codePostal" className={labelClass}>Code postal *</label>
                <input
                  id="codePostal"
                  type="text"
                  required
                  value={form.codePostal}
                  onChange={(e) => update("codePostal", e.target.value)}
                  placeholder="24000"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="ville" className={labelClass}>Ville *</label>
                <input
                  id="ville"
                  type="text"
                  required
                  value={form.ville}
                  onChange={(e) => update("ville", e.target.value)}
                  placeholder="Périgueux"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Production */}
        <fieldset className="rounded-2xl border border-[#2D5016]/10 bg-white p-6">
          <legend className="text-base font-bold text-[#2D5016] px-2">Production</legend>
          <div className="space-y-4 mt-2">
            <div>
              <label htmlFor="typeProduction" className={labelClass}>
                Type de production *
              </label>
              <select
                id="typeProduction"
                required
                value={form.typeProduction}
                onChange={(e) => update("typeProduction", e.target.value)}
                className={inputClass}
              >
                <option value="">Sélectionnez...</option>
                <option value="bio">Bio (code 0)</option>
                <option value="plein_air">Plein air (code 1)</option>
                <option value="sol">Sol (code 2)</option>
                <option value="cage">Cage (code 3)</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombrePoules" className={labelClass}>
                  Nombre de poules pondeuses *
                </label>
                <input
                  id="nombrePoules"
                  type="number"
                  required
                  min="1"
                  value={form.nombrePoules}
                  onChange={(e) => update("nombrePoules", e.target.value)}
                  placeholder="500"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="productionJournaliere" className={labelClass}>
                  Production journalière estimée *
                </label>
                <input
                  id="productionJournaliere"
                  type="number"
                  required
                  min="1"
                  value={form.productionJournaliere}
                  onChange={(e) => update("productionJournaliere", e.target.value)}
                  placeholder="400 œufs/jour"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="statut" className={labelClass}>Statut *</label>
              <select
                id="statut"
                required
                value={form.statut}
                onChange={(e) => update("statut", e.target.value)}
                className={inputClass}
              >
                <option value="">Sélectionnez...</option>
                <option value="en_activite">Déjà en activité</option>
                <option value="en_projet">En projet</option>
              </select>
            </div>
            <div>
              <label htmlFor="siret" className={labelClass}>
                Numéro SIRET <span className="text-[#2D5016]/40">(optionnel)</span>
              </label>
              <input
                id="siret"
                type="text"
                value={form.siret}
                onChange={(e) => update("siret", e.target.value)}
                placeholder="123 456 789 00012"
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>

        {/* Compte */}
        <fieldset className="rounded-2xl border border-[#2D5016]/10 bg-white p-6">
          <legend className="text-base font-bold text-[#2D5016] px-2">
            {state.isRegistered ? "Identifiants" : "Créer un compte"}
          </legend>
          <div className="space-y-4 mt-2">
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="marie@exploitation.fr"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="motDePasse" className={labelClass}>Mot de passe *</label>
              <input
                id="motDePasse"
                type="password"
                required
                minLength={6}
                value={form.motDePasse}
                onChange={(e) => update("motDePasse", e.target.value)}
                placeholder="6 caractères minimum"
                className={inputClass}
              />
            </div>
          </div>
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white transition-all cursor-pointer ${
            saved
              ? "bg-green-600"
              : "bg-[#2D5016] hover:bg-[#3a6b1e] shadow-lg hover:shadow-xl"
          }`}
        >
          {saved ? (
            <>
              <CheckCircle2 className="h-5 w-5" />
              Profil enregistré !
            </>
          ) : state.isRegistered ? (
            <>
              <Save className="h-5 w-5" />
              Mettre à jour mon profil
            </>
          ) : (
            <>
              Créer mon profil et accéder à la checklist
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
