import create from "zustand";

interface SignInUpStore {
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
}

export const useSignInUpStore = create<SignInUpStore>((set) => ({
  tabIndex: 0,
  setTabIndex: (tabIndex: number) => {
    set({ tabIndex });
  },
}));
