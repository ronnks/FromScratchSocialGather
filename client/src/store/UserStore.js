import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
  getUser: async () => {
    const response = await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    set({ user: data.user });
  },
}));
