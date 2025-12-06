import { create } from "zustand";
import type { Match, AnalysisResult } from "types/types";

interface AppStore {
  selectedLeague: string;
  selectedMatch: Match | null;
  analysis: AnalysisResult | null;
  loading: boolean;

  setLeague: (lg: string) => void;
  setMatch: (m: Match | null) => void;
  setAnalysis: (a: AnalysisResult | null) => void;
  setLoading: (l: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  selectedLeague: "BR",
  selectedMatch: null,
  analysis: null,
  loading: false,

  setLeague: (lg) => set({ selectedLeague: lg }),
  setMatch: (m) => set({ selectedMatch: m }),
  setAnalysis: (a) => set({ analysis: a }),
  setLoading: (l) => set({ loading: l })
}));
