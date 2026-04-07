"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Egg,
  TrendingUp,
  ClipboardList,
  MapPin,
  LogOut,
  TreePine,
  Leaf,
  Building,
  Layers,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { RegisteredUser } from "@/types/plateforme";
import { checklistData } from "@/data/checklist";

const ADMIN_KEY = "agriovo-admin-auth";
const REGISTRY_KEY = "agriovo-registry";

const productionLabels: Record<string, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  bio: { label: "Bio", icon: Leaf },
  plein_air: { label: "Plein air", icon: TreePine },
  sol: { label: "Sol", icon: Layers },
  cage: { label: "Cage", icon: Building },
};

const statutLabels: Record<string, string> = {
  en_activite: "En activité",
  en_projet: "En projet",
};

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color = "bg-[#2D5016]",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#2D5016]/10 p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-sm text-[#2D5016]/60">{label}</span>
      </div>
      <p className="text-3xl font-extrabold text-[#2D5016]">{value}</p>
      {sub && <p className="text-xs text-[#2D5016]/40 mt-1">{sub}</p>}
    </div>
  );
}

function UserRow({ user, expanded, onToggle }: { user: RegisteredUser; expanded: boolean; onToggle: () => void }) {
  const totalItems = checklistData.reduce((sum, cat) => sum + cat.items.length, 0);
  const doneItems = Object.values(user.checklistStatuses).filter((s) => s === "done").length;
  const inProgressItems = Object.values(user.checklistStatuses).filter((s) => s === "in_progress").length;
  const percent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
  const prodInfo = productionLabels[user.profile.typeProduction] ?? null;

  return (
    <div className="border-b border-[#2D5016]/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[#2D5016]/[0.02] transition-colors cursor-pointer text-left"
      >
        <div className="w-9 h-9 rounded-full bg-[#2D5016]/10 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-[#2D5016]">
            {user.profile.prenom?.[0]}{user.profile.nom?.[0]}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#2D5016] truncate">
            {user.profile.prenom} {user.profile.nom}
          </p>
          <p className="text-xs text-[#2D5016]/40 truncate">{user.profile.nomExploitation}</p>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {prodInfo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#2D5016]/5 px-2.5 py-1 text-[10px] font-semibold text-[#2D5016]/60">
              <prodInfo.icon className="h-3 w-3" />
              {prodInfo.label}
            </span>
          )}
          <div className="w-20">
            <div className="flex items-center justify-between text-[10px] text-[#2D5016]/40 mb-0.5">
              <span>{percent}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#2D5016]/10 overflow-hidden">
              <div
                className={`h-1.5 rounded-full transition-all ${percent === 100 ? "bg-[#2D5016]" : percent > 0 ? "bg-[#F5A623]" : ""}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[#2D5016]/30 shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[#2D5016]/30 shrink-0" />
        )}
      </button>

      {expanded && (
        <div className="px-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm bg-[#2D5016]/[0.015] border-t border-[#2D5016]/5">
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Email</span>
            <p className="text-[#2D5016]">{user.profile.email}</p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Adresse</span>
            <p className="text-[#2D5016]">
              {user.profile.adresse}, {user.profile.codePostal} {user.profile.ville}
            </p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Poules pondeuses</span>
            <p className="text-[#2D5016]">{user.profile.nombrePoules}</p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Production / jour</span>
            <p className="text-[#2D5016]">{user.profile.productionJournaliere} oeufs</p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Statut</span>
            <p className="text-[#2D5016]">{statutLabels[user.profile.statut] ?? "-"}</p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">SIRET</span>
            <p className="text-[#2D5016]">{user.profile.siret || "Non renseigné"}</p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Inscrit le</span>
            <p className="text-[#2D5016]">
              {new Date(user.registeredAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="py-2">
            <span className="text-[#2D5016]/40 text-xs">Progression checklist</span>
            <p className="text-[#2D5016]">
              {doneItems} terminé{doneItems > 1 ? "s" : ""}, {inProgressItems} en cours, {totalItems - doneItems - inProgressItems} à faire
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(ADMIN_KEY) !== "true") {
      router.replace("/plateforme/admin");
      return;
    }
    setAuthed(true);
    const raw = localStorage.getItem(REGISTRY_KEY);
    if (raw) {
      try {
        setUsers(JSON.parse(raw));
      } catch {}
    }
  }, [router]);

  const stats = useMemo(() => {
    const totalPoules = users.reduce((sum, u) => sum + (parseInt(u.profile.nombrePoules) || 0), 0);
    const totalProd = users.reduce((sum, u) => sum + (parseInt(u.profile.productionJournaliere) || 0), 0);
    const byType: Record<string, number> = {};
    const byStatut: Record<string, number> = {};
    const byVille: Record<string, number> = {};

    for (const u of users) {
      if (u.profile.typeProduction) byType[u.profile.typeProduction] = (byType[u.profile.typeProduction] || 0) + 1;
      if (u.profile.statut) byStatut[u.profile.statut] = (byStatut[u.profile.statut] || 0) + 1;
      if (u.profile.ville) {
        const ville = u.profile.ville.trim();
        byVille[ville] = (byVille[ville] || 0) + 1;
      }
    }

    const totalItems = checklistData.reduce((sum, cat) => sum + cat.items.length, 0);
    let totalDone = 0;
    for (const u of users) {
      totalDone += Object.values(u.checklistStatuses).filter((s) => s === "done").length;
    }
    const avgProgress = users.length > 0 ? Math.round((totalDone / (users.length * totalItems)) * 100) : 0;

    return { totalPoules, totalProd, byType, byStatut, byVille, avgProgress };
  }, [users]);

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_KEY);
    router.push("/plateforme/admin");
  };

  const handleRefresh = () => {
    const raw = localStorage.getItem(REGISTRY_KEY);
    if (raw) {
      try {
        setUsers(JSON.parse(raw));
      } catch {}
    }
  };

  if (!authed) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016]">Dashboard Admin</h1>
          <p className="text-sm text-[#2D5016]/50 mt-1">Vue d&apos;ensemble des inscriptions</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="rounded-lg border border-[#2D5016]/20 px-3 py-2 text-xs font-medium text-[#2D5016]/60 hover:bg-[#2D5016]/5 transition-colors cursor-pointer"
          >
            Rafraichir
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            Déconnexion
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Users} label="Inscrits" value={users.length} sub={`${stats.byStatut["en_activite"] || 0} en activité, ${stats.byStatut["en_projet"] || 0} en projet`} />
        <StatCard icon={Egg} label="Poules totales" value={stats.totalPoules.toLocaleString("fr-FR")} sub={`${stats.totalProd.toLocaleString("fr-FR")} oeufs/jour estimés`} color="bg-[#F5A623]" />
        <StatCard icon={TrendingUp} label="Progression moy." value={`${stats.avgProgress}%`} sub="Checklist complétée" color="bg-[#2D5016]" />
        <StatCard
          icon={ClipboardList}
          label="Types de production"
          value={Object.keys(stats.byType).length}
          sub={Object.entries(stats.byType).map(([k, v]) => `${productionLabels[k]?.label ?? k}: ${v}`).join(", ") || "Aucun"}
          color="bg-[#F5A623]"
        />
      </div>

      {/* Villes */}
      {Object.keys(stats.byVille).length > 0 && (
        <div className="rounded-2xl bg-white border border-[#2D5016]/10 p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-[#2D5016]/60" />
            <h2 className="text-sm font-bold text-[#2D5016]">Répartition géographique</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.byVille)
              .sort((a, b) => b[1] - a[1])
              .map(([ville, count]) => (
                <span
                  key={ville}
                  className="inline-flex items-center gap-1 rounded-full bg-[#2D5016]/5 px-3 py-1 text-xs font-medium text-[#2D5016]/70"
                >
                  {ville}
                  <span className="bg-[#2D5016]/10 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-[#2D5016]">{count}</span>
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Users list */}
      <div className="rounded-2xl bg-white border border-[#2D5016]/10 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2D5016]/10">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#2D5016]/60" />
            <h2 className="text-sm font-bold text-[#2D5016]">Utilisateurs inscrits</h2>
          </div>
          <span className="text-xs text-[#2D5016]/40">{users.length} inscription{users.length > 1 ? "s" : ""}</span>
        </div>

        {users.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <Users className="h-10 w-10 text-[#2D5016]/20 mx-auto mb-3" />
            <p className="text-sm text-[#2D5016]/40">Aucun utilisateur inscrit pour le moment</p>
          </div>
        ) : (
          <div>
            {users
              .sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime())
              .map((user) => (
                <UserRow
                  key={user.profile.email}
                  user={user}
                  expanded={expandedUser === user.profile.email}
                  onToggle={() =>
                    setExpandedUser(expandedUser === user.profile.email ? null : user.profile.email)
                  }
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
