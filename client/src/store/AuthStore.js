import { create } from "zustand";
import { CONSTANTS } from "../constants/Constants";

export const useAuthStore = create((set) => ({
  signup: async (user) => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.username ||
      !user.email ||
      !user.password
    ) {
      return { sucess: false, message: "All fields are required" };
    }

    const response = await fetch(CONSTANTS.BACKEND_URL + "/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    set({ user: data.user, error: data.error });
    return { sucess: true, message: "registered successfully." };
  },

  login: async (user) => {
    if (!user.email || !user.password) {
      return { success: false, message: "All fields are required" };
    }

    const response = await fetch(backendUrl + "/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    set({ user: data.user, error: data.error });
    return { sucess: true, message: "logged in successfully." };
  },

  logout: async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    set({ user: null, error: data.error });
    return { sucess: true, message: "logged out successfully." };
  },

  forgotPassword: async (email) => {
    const response = await fetch("/api/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    set({ user: null, error: data.error });
    return { sucess: true, message: "password reset link sent." };
  },

  resetPassword: async (password, token) => {
    const response = await fetch("/api/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, token }),
    });
    const data = await response.json();
    set({ user: null, error: data.error });
    return { sucess: true, message: "password reset successfully." };
  },
}));
