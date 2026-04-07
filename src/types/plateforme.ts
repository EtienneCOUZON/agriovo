export type ItemStatus = "todo" | "in_progress" | "done";

export interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  conseils: string;
  documents: string[];
  premium: boolean;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export interface ExploitationProfile {
  nomExploitation: string;
  nom: string;
  prenom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  typeProduction: "plein_air" | "bio" | "cage" | "sol" | "";
  nombrePoules: string;
  productionJournaliere: string;
  statut: "en_activite" | "en_projet" | "";
  siret: string;
  email: string;
  motDePasse: string;
}

export interface RegisteredUser {
  profile: ExploitationProfile;
  registeredAt: string;
  checklistStatuses: Record<string, ItemStatus>;
}

export interface AppState {
  profile: ExploitationProfile | null;
  isRegistered: boolean;
  checklistStatuses: Record<string, ItemStatus>;
}
