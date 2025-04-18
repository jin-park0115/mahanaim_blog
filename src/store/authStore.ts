import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  isLoggeIn: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: sessionStorage.getItem("token"),
  setToken: (token) => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
    set({ token, isLoggeIn: !!token });
  },
  isLoggeIn: !!sessionStorage.getItem("token"),
}));
