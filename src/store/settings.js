import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettingsStore = create()(
  persist(
    (set) => ({
      colorPrimary: "#1DA57A",
      setColorPrimary: (colorPrimary) => set({ colorPrimary }),
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
    }),
    {
      name: "app-settings",
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => ["colorPrimary", "collapsed"].includes(key))),
    },
  ),
);
