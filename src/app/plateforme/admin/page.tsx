"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, Egg, AlertCircle } from "lucide-react";

const ADMIN_EMAIL = "admin@agriovo.fr";
const ADMIN_PASSWORD = "agriovo2024";
const ADMIN_KEY = "agriovo-admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_KEY, "true");
      router.push("/plateforme/admin/dashboard");
    } else {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-[#2D5016] flex items-center justify-center mb-4">
            <Egg className="h-7 w-7 text-[#F5A623]" />
          </div>
          <h1 className="text-xl font-extrabold text-[#2D5016]">Administration</h1>
          <p className="text-sm text-[#2D5016]/50 mt-1">Connectez-vous pour accéder au dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-[#2D5016]/10 p-6 space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div>
            <label htmlFor="admin-email" className="block text-sm font-medium text-[#2D5016] mb-1.5">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="admin@agriovo.fr"
              className="w-full rounded-lg border border-[#2D5016]/20 bg-white px-4 py-2.5 text-sm text-[#2D5016] placeholder:text-[#2D5016]/30 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30 transition-all"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-[#2D5016] mb-1.5">
              Mot de passe
            </label>
            <input
              id="admin-password"
              type="password"
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="••••••••"
              className="w-full rounded-lg border border-[#2D5016]/20 bg-white px-4 py-2.5 text-sm text-[#2D5016] placeholder:text-[#2D5016]/30 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/30 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2D5016] px-6 py-3 text-sm font-bold text-white hover:bg-[#3a6b1e] transition-colors cursor-pointer"
          >
            <Lock className="h-4 w-4" />
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
