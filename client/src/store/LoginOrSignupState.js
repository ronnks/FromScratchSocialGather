import { create } from "zustand";

export const loginOrSignup = create((set) => ({
  loginOrSignupState: "Login",
  setLoginOrSignupState: (loginOrSignup) =>
    set({ loginOrSignupState: loginOrSignup }),
}));
