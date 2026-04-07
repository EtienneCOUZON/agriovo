"use client";

import Link from "next/link";
import {
  Egg,
  ClipboardList,
  Award,
  UserPlus,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Créez votre profil",
    desc: "Renseignez les informations de votre exploitation en quelques minutes.",
    color: "bg-[#2D5016]",
  },
  {
    icon: ClipboardList,
    title: "2. Suivez la checklist",
    desc: "Parcourez les 8 catégories et cochez chaque étape au fur et à mesure.",
    color: "bg-[#F5A623]",
  },
  {
    icon: Award,
    title: "3. Obtenez l'agrément",
    desc: "Constituez votre dossier complet et préparez l'inspection DDPP.",
    color: "bg-[#2D5016]",
  },
];

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Éleveuse bio, Dordogne",
    text: "Grâce à Agriovo, j'ai pu structurer mon dossier d'agrément sans rien oublier. La checklist est un vrai gain de temps !",
    stars: 5,
  },
  {
    name: "Jean-Pierre Martin",
    role: "Producteur plein air, Bretagne",
    text: "Je partais de zéro et la plateforme m'a guidé pas à pas. J'ai obtenu mon agrément conditionnel en 4 mois.",
    stars: 5,
  },
  {
    name: "Sophie Renard",
    role: "Centre de conditionnement, Alsace",
    text: "Les modèles de documents premium m'ont fait gagner des semaines de travail. Investissement largement rentabilisé.",
    stars: 4,
  },
];

const faqItems = [
  {
    q: "La version d'essai est-elle vraiment gratuite ?",
    a: "Oui, la version d'essai vous donne accès à la création de votre profil d'exploitation et à la checklist complète avec le détail de chaque étape. Vous pouvez suivre votre progression sans aucun engagement.",
  },
  {
    q: "Que contient la version premium ?",
    a: "La version premium inclut les modèles de documents prêts à l'emploi (PMS, HACCP, procédures), des guides détaillés par un expert, et un suivi personnalisé de votre dossier d'agrément.",
  },
  {
    q: "Combien de temps faut-il pour obtenir l'agrément ?",
    a: "Le délai varie selon votre situation, mais en général il faut compter entre 3 et 6 mois entre le dépôt du dossier et l'obtention de l'agrément définitif. La préparation du dossier peut prendre de 2 à 6 mois supplémentaires.",
  },
  {
    q: "Est-ce que mes données sont sauvegardées ?",
    a: "Vos données sont sauvegardées localement dans votre navigateur. Elles restent disponibles tant que vous ne videz pas les données de navigation. Aucune donnée n'est envoyée à un serveur externe.",
  },
  {
    q: "Puis-je utiliser Agriovo si je suis encore en projet ?",
    a: "Absolument ! Agriovo est conçu aussi bien pour les exploitations en activité que pour les projets en cours de création. La checklist vous aidera à anticiper toutes les étapes nécessaires.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2D5016]/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[#2D5016]/[0.02] transition-colors"
      >
        <span className="font-medium text-[#2D5016] pr-4">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-[#F5A623] shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#2D5016]/40 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-[#2D5016]/70 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function PlateformeHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2D5016] via-[#3a6b1e] to-[#2D5016] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5A623] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6">
            <Egg className="h-4 w-4 text-[#F5A623]" />
            Plateforme d&apos;accompagnement
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            De l&apos;œuf à l&apos;agrément
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            La plateforme qui guide les exploitants agricoles vers l&apos;agrément sanitaire
            de leur centre de conditionnement d&apos;œufs, étape par étape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/plateforme/profil"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F5A623] px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#e09515] transition-colors"
            >
              Commencer l&apos;essai gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/plateforme/checklist"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Voir la checklist
            </Link>
          </div>
        </div>
      </section>

      {/* Features gratuit vs premium */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#2D5016]/10 bg-white p-7">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-6 w-6 text-[#2D5016]" />
              <h3 className="text-lg font-bold text-[#2D5016]">Essai gratuit</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#2D5016]/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D5016] mt-0.5 shrink-0" />
                Profil d&apos;exploitation complet
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D5016] mt-0.5 shrink-0" />
                Checklist interactive avec 60+ items
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D5016] mt-0.5 shrink-0" />
                Description et conseils pour chaque étape
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D5016] mt-0.5 shrink-0" />
                Suivi de progression avec barres visuelles
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2D5016] mt-0.5 shrink-0" />
                Sauvegarde automatique
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#F5A623]/40 bg-gradient-to-br from-[#F5A623]/5 to-white p-7 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F5A623] px-3 py-1 text-xs font-bold text-white">
                <Sparkles className="h-3 w-3" />
                Premium
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-6 w-6 text-[#F5A623]" />
              <h3 className="text-lg font-bold text-[#2D5016]">Version premium</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#2D5016]/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
                Tout le contenu gratuit inclus
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
                Modèles de documents prêts à l&apos;emploi
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
                Guides détaillés par des experts
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
                Suivi personnalisé de votre dossier
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
                Accès aux items verrouillés
              </li>
            </ul>
            <p className="mt-4 text-xs text-[#2D5016]/40">Bientôt disponible</p>
          </div>
        </div>
      </section>

      {/* 3 étapes */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016] text-center mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-center text-[#2D5016]/60 mb-12 max-w-xl mx-auto">
            Trois étapes simples pour structurer votre parcours vers l&apos;agrément sanitaire.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div
                  className={`mx-auto w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2D5016] mb-2">{step.title}</h3>
                <p className="text-sm text-[#2D5016]/60 leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block mt-6">
                    <ArrowRight className="h-6 w-6 text-[#2D5016]/20 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016] text-center mb-12">
            Ils nous font confiance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#2D5016]/10 p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${
                        j < t.stars ? "text-[#F5A623] fill-[#F5A623]" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[#2D5016]/70 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#2D5016]">{t.name}</p>
                  <p className="text-xs text-[#2D5016]/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016] text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FaqItem key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-[#2D5016] to-[#3a6b1e] p-10 text-white">
            <Egg className="h-10 w-10 text-[#F5A623] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Prêt à démarrer votre parcours ?
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Créez votre profil gratuitement et commencez à cocher les étapes vers votre agrément
              sanitaire.
            </p>
            <Link
              href="/plateforme/profil"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F5A623] px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#e09515] transition-colors"
            >
              Commencer maintenant
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
