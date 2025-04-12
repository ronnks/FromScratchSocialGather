import { create } from "zustand";
import { CONSTANTS } from "../constants/Constants";

export const usePostStore = create((set) => ({
  myPosts: [],
  setPosts: (myPosts) => set({ myPosts }),
  createAPost: async (newPost) => {
    if (!newPost) {
      return { success: false, message: "Post content is required" };
    }

    try {
      const response = await fetch(
        CONSTANTS.BACKEND_URL + "/api/post/make-a-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (!response.ok) {
        return { success: false, message: "Failed to create post" };
      }
      const data = await response.json();
      set((state) => ({ myPosts: [...state.myPosts, data] }));
      return { success: true, message: "Post created successfully" };
    } catch (error) {
      return { error: error.message };
    }
  },

  getPosts: async () => {
    try {
      const response = await fetch(
        CONSTANTS.BACKEND_URL + "/api/post/my-feed",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        return { success: false, message: "Failed to retrieve posts" };
      }
      const data = await response.json();
      set((state) => ({ myPosts: [...state, data] }));
      return { success: true, message: "Posts successfully retrieved" };
    } catch (error) {
      return { error: error.message };
    }
  },
}));
