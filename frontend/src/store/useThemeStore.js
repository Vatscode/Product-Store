import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preferred-theme") || "coffee",
  
  setTheme: (theme) => {
    document.documentElement.setAttribute("data-theme", theme); // Directly set theme on <html>
    localStorage.setItem("preferred-theme", theme);
    set({ theme });
  },
}));
