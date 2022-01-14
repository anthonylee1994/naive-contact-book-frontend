import create from "zustand";
import { useAuthStore } from "../../../stores/useAuthStore";

interface SignUpFormStore {
  name: string;
  avatarFile: File | null;
  setName: (name: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useSignUpFormStore = create<SignUpFormStore>((set, get) => ({
  name: "",
  avatarFile: null,
  setName: (name: string) => {
    set({ name });
  },
  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, avatarFile } = get();
    useAuthStore.getState().signUp(name, avatarFile);
  },
}));
