import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettingsStore = create()(
  persist(
    (set) => ({
      colorPrimary: "a39f9fc4",
      setColorPrimary: (colorPrimary) => set({ colorPrimary }),
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
      activeTopNav: "dashboard",
      setActiveTopNav: (activeTopNav) => set({ activeTopNav }),
    }),
    {
      name: "app-settings",
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => ["colorPrimary", "collapsed", "activeTopNav"].includes(key))),
    },
  ),
);
