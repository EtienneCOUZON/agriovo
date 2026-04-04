"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const solutionsLinks = [
  { label: "Calibrage des \u0153ufs", href: "/solutions/calibrage" },
  { label: "Mirage & Contr\u00f4le qualit\u00e9", href: "/solutions/mirage" },
  { label: "Conditionnement & Emballage", href: "/solutions/conditionnement-emballage" },
  { label: "Marquage & Tra\u00e7abilit\u00e9", href: "/solutions/marquage-tracabilite" },
  { label: "Construction de b\u00e2timent", href: "/solutions/batiment" },
  { label: "Ligne compl\u00e8te cl\u00e9 en main", href: "/solutions/ligne-complete" },
  { label: "Toutes nos solutions", href: "/solutions" },
];

const machinesLinks = [
  { label: "Centres complets", href: "/machines/centres-complets" },
  { label: "Calibreuses & Mireuses", href: "/machines/calibreuses" },
  { label: "Impression & Marquage", href: "/machines/impression-marquage" },
  { label: "\u00c9quipements & Accessoires", href: "/machines/equipements" },
  { label: "Tout le catalogue", href: "/machines" },
];

interface NavDropdownProps {
  label: string;
  links: { label: string; href: string }[];
  closeMobile: () => void;
}

function NavDropdown({ label, links, closeMobile }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <>
      {/* Desktop dropdown */}
      <div
        className="relative hidden lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="flex items-center gap-1 text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {label}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute left-0 top-full pt-2 z-50">
            <div className="w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0f2744]/5 hover:text-[#e8772e] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between py-3 text-[#0f2744] font-medium cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {label}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="pl-4 pb-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-gray-600 hover:text-[#e8772e] transition-colors"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={closeMobile}>
          <span className="text-2xl font-extrabold tracking-tight text-[#0f2744]">
            AGRIOVO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
          >
            Accueil
          </Link>
          <NavDropdown
            label="Solutions"
            links={solutionsLinks}
            closeMobile={closeMobile}
          />
          <NavDropdown
            label="Machines"
            links={machinesLinks}
            closeMobile={closeMobile}
          />
          <Link
            href="/bureau-etudes"
            className="text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
          >
            Bureau d&apos;etudes
          </Link>
          <Link
            href="/entreprise"
            className="text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
          >
            Entreprise
          </Link>
          <Link
            href="/contact"
            className="text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0767104277"
            className="flex items-center gap-2 text-sm font-medium text-[#0f2744] hover:text-[#e8772e] transition-colors"
          >
            <Phone className="h-4 w-4" />
            07 67 10 42 77
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#e8772e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d4691f]"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-[#0f2744] cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-white overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <Link
              href="/"
              className="block py-3 text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
              onClick={closeMobile}
            >
              Accueil
            </Link>
            <NavDropdown
              label="Solutions"
              links={solutionsLinks}
              closeMobile={closeMobile}
            />
            <NavDropdown
              label="Machines"
              links={machinesLinks}
              closeMobile={closeMobile}
            />
            <Link
              href="/bureau-etudes"
              className="block py-3 text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
              onClick={closeMobile}
            >
              Bureau d&apos;etudes
            </Link>
            <Link
              href="/entreprise"
              className="block py-3 text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
              onClick={closeMobile}
            >
              Entreprise
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-[#0f2744] font-medium hover:text-[#e8772e] transition-colors"
              onClick={closeMobile}
            >
              Contact
            </Link>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <a
                href="tel:0767104277"
                className="flex items-center gap-2 text-sm font-medium text-[#0f2744]"
              >
                <Phone className="h-4 w-4" />
                07 67 10 42 77
              </a>
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-[#e8772e] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#d4691f]"
                onClick={closeMobile}
              >
                Demander un devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
