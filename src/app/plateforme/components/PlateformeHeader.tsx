"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Egg, LogOut, User } from "lucide-react";
import { usePlateforme } from "@/context/PlateformeContext";

export default function PlateformeHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state, logout } = usePlateforme();

  const navLinks = [
    { label: "Accueil", href: "/plateforme" },
    { label: "Checklist", href: "/plateforme/checklist" },
    ...(state.isRegistered
      ? [{ label: "Mon profil", href: "/plateforme/profil" }]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#2D5016]/10 shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/plateforme"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-9 h-9 rounded-full bg-[#F5A623] flex items-center justify-center">
            <Egg className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#2D5016]">
            Agriovo
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2D5016]/80 hover:text-[#2D5016] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {state.isRegistered ? (
            <>
              <span className="text-sm text-[#2D5016]/60 flex items-center gap-1">
                <User className="h-4 w-4" />
                {state.profile?.prenom}
              </span>
              <button
                onClick={logout}
                className="text-sm text-[#2D5016]/60 hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                Quitter
              </button>
            </>
          ) : (
            <Link
              href="/plateforme/profil"
              className="inline-flex items-center justify-center rounded-lg bg-[#2D5016] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3a6b1e] transition-colors"
            >
              Essai gratuit
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-[#2D5016] cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2D5016]/10 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm font-medium text-[#2D5016]/80 hover:text-[#2D5016]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#2D5016]/10">
              {state.isRegistered ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-2.5 text-sm text-red-600 cursor-pointer"
                >
                  Se déconnecter
                </button>
              ) : (
                <Link
                  href="/plateforme/profil"
                  className="block w-full rounded-lg bg-[#2D5016] px-4 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Commencer l&apos;essai gratuit
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
