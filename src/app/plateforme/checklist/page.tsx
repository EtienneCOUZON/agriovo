"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ClipboardList,
  Building2,
  Wrench,
  ShieldCheck,
  ScanBarcode,
  Users,
  FileText,
  Award,
  ChevronDown,
  ChevronUp,
  Lock,
  Square,
  Clock,
  CheckSquare,
  X,
  AlertCircle,
} from "lucide-react";
import { usePlateforme } from "@/context/PlateformeContext";
import { checklistData } from "@/data/checklist";
import { ItemStatus, ChecklistItem } from "@/types/plateforme";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  Building2,
  Wrench,
  ShieldCheck,
  ScanBarcode,
  Users,
  FileText,
  Award,
};

const statusConfig: Record<ItemStatus, { label: string; color: string; bg: string; icon: React.ComponentType<{ className?: string }> }> = {
  todo: { label: "A faire", color: "text-gray-400", bg: "bg-gray-100", icon: Square },
  in_progress: { label: "En cours", color: "text-[#F5A623]", bg: "bg-[#F5A623]/10", icon: Clock },
  done: { label: "Fait", color: "text-[#2D5016]", bg: "bg-[#2D5016]/10", icon: CheckSquare },
};

const nextStatus: Record<ItemStatus, ItemStatus> = {
  todo: "in_progress",
  in_progress: "done",
  done: "todo",
};

function ProgressBar({ value, size = "md" }: { value: number; size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-1.5" : "h-2.5";
  return (
    <div className={`w-full ${h} rounded-full bg-[#2D5016]/10 overflow-hidden`}>
      <div
        className={`${h} rounded-full transition-all duration-500 ${
          value === 100 ? "bg-[#2D5016]" : value > 0 ? "bg-[#F5A623]" : "bg-transparent"
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function ItemDetail({ item, onClose }: { item: ChecklistItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-5 border-b border-[#2D5016]/10">
          <h3 className="text-base font-bold text-[#2D5016] pr-4">{item.label}</h3>
          <button onClick={onClose} className="p-1 text-[#2D5016]/40 hover:text-[#2D5016] cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-[#2D5016] mb-1">Description</h4>
            <p className="text-sm text-[#2D5016]/70 leading-relaxed">{item.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#2D5016] mb-1">Conseils</h4>
            <p className="text-sm text-[#2D5016]/70 leading-relaxed">{item.conseils}</p>
          </div>
          {item.documents.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-[#2D5016] mb-1">Documents nécessaires</h4>
              <ul className="space-y-1">
                {item.documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#2D5016]/70">
                    <FileText className="h-3.5 w-3.5 text-[#F5A623] shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.premium && (
            <div className="rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/20 p-3 flex items-start gap-2">
              <Lock className="h-4 w-4 text-[#F5A623] mt-0.5 shrink-0" />
              <p className="text-xs text-[#2D5016]/60">
                Les modèles de documents et guides détaillés pour cette étape sont disponibles dans la version premium.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChecklistPage() {
  const { state, updateItemStatus } = usePlateforme();
  const [expandedCat, setExpandedCat] = useState<string | null>(checklistData[0]?.id ?? null);
  const [detailItem, setDetailItem] = useState<ChecklistItem | null>(null);

  const getStatus = (id: string): ItemStatus => state.checklistStatuses[id] ?? "todo";

  const catStats = useMemo(() => {
    const stats: Record<string, { total: number; done: number; inProgress: number }> = {};
    for (const cat of checklistData) {
      let done = 0;
      let inProgress = 0;
      for (const item of cat.items) {
        const s = getStatus(item.id);
        if (s === "done") done++;
        else if (s === "in_progress") inProgress++;
      }
      stats[cat.id] = { total: cat.items.length, done, inProgress };
    }
    return stats;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.checklistStatuses]);

  const globalStats = useMemo(() => {
    let total = 0;
    let done = 0;
    let inProgress = 0;
    for (const s of Object.values(catStats)) {
      total += s.total;
      done += s.done;
      inProgress += s.inProgress;
    }
    return { total, done, inProgress, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }, [catStats]);

  if (!state.isRegistered) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-20 text-center">
        <AlertCircle className="h-12 w-12 text-[#F5A623] mx-auto mb-4" />
        <h1 className="text-2xl font-extrabold text-[#2D5016] mb-3">
          Créez votre profil pour accéder à la checklist
        </h1>
        <p className="text-sm text-[#2D5016]/60 mb-6">
          Renseignez les informations de votre exploitation pour débloquer le suivi interactif de votre parcours vers l&apos;agrément.
        </p>
        <Link
          href="/plateforme/profil"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2D5016] px-6 py-3 text-sm font-bold text-white hover:bg-[#3a6b1e] transition-colors"
        >
          Créer mon profil
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D5016] mb-2">
          Checklist agrément sanitaire
        </h1>
        <p className="text-sm text-[#2D5016]/60 mb-5">
          Suivez votre progression vers l&apos;obtention de l&apos;agrément. Cliquez sur un item pour voir le détail.
        </p>

        {/* Global progress */}
        <div className="rounded-2xl bg-white border border-[#2D5016]/10 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#2D5016]">Progression globale</span>
            <span className="text-2xl font-extrabold text-[#2D5016]">{globalStats.percent}%</span>
          </div>
          <ProgressBar value={globalStats.percent} />
          <div className="flex gap-4 mt-3 text-xs text-[#2D5016]/50">
            <span>{globalStats.done} terminé{globalStats.done > 1 ? "s" : ""}</span>
            <span>{globalStats.inProgress} en cours</span>
            <span>{globalStats.total - globalStats.done - globalStats.inProgress} à faire</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {checklistData.map((cat) => {
          const Icon = iconMap[cat.icon] ?? ClipboardList;
          const stats = catStats[cat.id];
          const catPercent = stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0;
          const isExpanded = expandedCat === cat.id;

          return (
            <div key={cat.id} className="rounded-2xl bg-white border border-[#2D5016]/10 overflow-hidden">
              {/* Category header */}
              <button
                onClick={() => setExpandedCat(isExpanded ? null : cat.id)}
                className="w-full flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-[#2D5016]/[0.02] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2D5016]/5 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#2D5016]" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-sm font-bold text-[#2D5016] truncate pr-2">{cat.title}</h2>
                    <span className="text-xs text-[#2D5016]/40 shrink-0">
                      {stats.done}/{stats.total}
                    </span>
                  </div>
                  <ProgressBar value={catPercent} size="sm" />
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-[#2D5016]/30 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#2D5016]/30 shrink-0" />
                )}
              </button>

              {/* Items */}
              {isExpanded && (
                <div className="border-t border-[#2D5016]/5 px-5 py-2">
                  {cat.items.map((item) => {
                    const status = getStatus(item.id);
                    const cfg = statusConfig[status];
                    const StatusIcon = cfg.icon;

                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 py-2.5 group"
                      >
                        {/* Status toggle */}
                        <button
                          onClick={() => updateItemStatus(item.id, nextStatus[status])}
                          className={`shrink-0 w-7 h-7 rounded-lg ${cfg.bg} flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#2D5016]/10 transition-all`}
                          title={`Statut : ${cfg.label}. Cliquez pour changer.`}
                        >
                          <StatusIcon className={`h-4 w-4 ${cfg.color}`} />
                        </button>

                        {/* Label - clickable for detail */}
                        <button
                          onClick={() => setDetailItem(item)}
                          className={`flex-1 text-left text-sm cursor-pointer transition-colors ${
                            status === "done"
                              ? "text-[#2D5016]/40 line-through"
                              : "text-[#2D5016]/80 hover:text-[#2D5016]"
                          }`}
                        >
                          {item.label}
                        </button>

                        {/* Premium badge */}
                        {item.premium && (
                          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#F5A623]/10 px-2 py-0.5 text-[10px] font-semibold text-[#F5A623]">
                            <Lock className="h-3 w-3" />
                            Premium
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail modal */}
      {detailItem && <ItemDetail item={detailItem} onClose={() => setDetailItem(null)} />}
    </div>
  );
}
