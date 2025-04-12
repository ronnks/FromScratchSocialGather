import { create } from "zustand";
import { CONSTANTS } from "../constants/Constants";

export const usePostStore = create((set) => ({
  posts: [],
  post: async () => {
    try {
      const response = await fetch(
        CONSTANTS.BACKEND_URL + "/api/post/make-a-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
