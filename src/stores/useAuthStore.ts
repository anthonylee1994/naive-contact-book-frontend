import create from "zustand";
import { InlineResponse201 } from "api";
import { apiClient } from "utils/apiClient";
import { browserHistory } from "utils/browserHistory";

interface AuthStore {
  isSignUpError: boolean;
  isSignInError: boolean;
  isSigning: boolean;
  user: InlineResponse201 | null;
  signUp: (name: string) => void;
  signIn: (privateKey: string) => void;
  signOut: () => void;
  checkAuth: () => void;
  setUser: (user: InlineResponse201) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isSigning: false,
  isSignUpError: false,
  isSignInError: false,
  user: null,
  setUser(user: InlineResponse201) {
    set({ user });
  },
  async signUp(name) {
    try {
      set({ isSigning: true });
      const response = await apiClient.signUpPost(name);

      localStorage.setItem("token", response.data.secret);

      set({ user: response.data, isSignUpError: false, isSigning: false });

      browserHistory.push("/");
    } catch (error) {
      set({ isSigning: false, isSignUpError: true });
    }
  },

  async signIn(privateKey) {
    try {
      set({ isSigning: true });
      localStorage.setItem("token", privateKey);

      const response = await apiClient.meGet();

      set({ user: response.data, isSignInError: false, isSigning: false });

      browserHistory.push("/");
    } catch (error) {
      set({ isSigning: false, isSignInError: true });
    }
  },

  async signOut() {
    localStorage.removeItem("token");
    browserHistory.push("/sign-in");
  },

  async checkAuth() {
    try {
      if (!localStorage.getItem("token")) {
        throw new Error("No token");
      }

      const response = await apiClient.meGet();
      set({ user: response.data, isSignUpError: false, isSigning: false });

      if (window.location.pathname === "/sign-in") {
        browserHistory.push("/");
      }
    } catch (e) {
      if (window.location.pathname !== "/sign-in") {
        browserHistory.push("/sign-in");
      }
    }
  },
}));
