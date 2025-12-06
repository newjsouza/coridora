import { create } from "zustand";

interface NavigationStore {
  currentPage: string;
  setPage: (p: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  currentPage: "dashboard",
  setPage: (p) => set({ currentPage: p })
}));
