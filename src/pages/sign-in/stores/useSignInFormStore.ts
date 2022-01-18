import create from "zustand";
import { useAuthStore } from "stores/useAuthStore";

interface SignInFormStore {
  privateKey: string;
  setPrivateKey: (privateKey: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useSignInFormStore = create<SignInFormStore>((set, get) => ({
  privateKey: "2f634967ee572fb7561e0ecf47c054e0",
  setPrivateKey: (privateKey: string) => {
    set({ privateKey });
  },
  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { privateKey, setPrivateKey } = get();
    useAuthStore.getState().signIn(privateKey);
    setPrivateKey("");
  },
}));
