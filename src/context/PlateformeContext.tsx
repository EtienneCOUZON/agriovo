"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { AppState, ExploitationProfile, ItemStatus, RegisteredUser } from "@/types/plateforme";

const STORAGE_KEY = "agriovo-plateforme";
const REGISTRY_KEY = "agriovo-registry";

const defaultState: AppState = {
  profile: null,
  isRegistered: false,
  checklistStatuses: {},
};

interface PlateformeContextType {
  state: AppState;
  saveProfile: (profile: ExploitationProfile) => void;
  updateItemStatus: (itemId: string, status: ItemStatus) => void;
  logout: () => void;
}

const PlateformeContext = createContext<PlateformeContextType | null>(null);

function loadState(): AppState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultState;
}

function persistState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function PlateformeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(defaultState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) persistState(state);
  }, [state, hydrated]);

  const saveProfile = useCallback((profile: ExploitationProfile) => {
    setState((prev) => {
      // Add/update user in the registry
      try {
        const raw = localStorage.getItem(REGISTRY_KEY);
        const registry: RegisteredUser[] = raw ? JSON.parse(raw) : [];
        const existingIdx = registry.findIndex((u) => u.profile.email === profile.email);
        const entry: RegisteredUser = {
          profile,
          registeredAt: existingIdx >= 0 ? registry[existingIdx].registeredAt : new Date().toISOString(),
          checklistStatuses: prev.checklistStatuses,
        };
        if (existingIdx >= 0) {
          registry[existingIdx] = entry;
        } else {
          registry.push(entry);
        }
        localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
      } catch {}
      return { ...prev, profile, isRegistered: true };
    });
  }, []);

  const updateItemStatus = useCallback((itemId: string, status: ItemStatus) => {
    setState((prev) => {
      const newStatuses = { ...prev.checklistStatuses, [itemId]: status };
      // Sync to registry
      if (prev.profile?.email) {
        try {
          const raw = localStorage.getItem(REGISTRY_KEY);
          const registry: RegisteredUser[] = raw ? JSON.parse(raw) : [];
          const idx = registry.findIndex((u) => u.profile.email === prev.profile?.email);
          if (idx >= 0) {
            registry[idx].checklistStatuses = newStatuses;
            localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
          }
        } catch {}
      }
      return { ...prev, checklistStatuses: newStatuses };
    });
  }, []);

  const logout = useCallback(() => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  if (!hydrated) return null;

  return (
    <PlateformeContext.Provider value={{ state, saveProfile, updateItemStatus, logout }}>
      {children}
    </PlateformeContext.Provider>
  );
}

export function usePlateforme() {
  const ctx = useContext(PlateformeContext);
  if (!ctx) throw new Error("usePlateforme must be used within PlateformeProvider");
  return ctx;
}
