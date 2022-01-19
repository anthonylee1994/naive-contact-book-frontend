import create from "zustand";
import { useAuthStore } from "stores/useAuthStore";

interface SignUpFormStore {
  name: string;
  setName: (name: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useSignUpFormStore = create<SignUpFormStore>((set, get) => ({
  name: "",
  setName: (name: string) => {
    set({ name });
  },
  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name } = get();
    useAuthStore.getState().signUp(name);
    set({ name: "" });
  },
}));
