import { apiClientAxios } from "utils/apiClient";
import { browserHistory } from "utils/browserHistory";
import create from "zustand";

interface ShareContactStore {
  otpCode: string;
  userId: number;
  fetched: boolean;
  modalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  refetchQRCode: () => Promise<void>;
  getQRCodeValue: () => string | null;
  addFriend: (targetId: number, otpCode: string) => void;
}

export const useShareContactStore = create<ShareContactStore>((set, get) => ({
  otpCode: "",
  userId: -1,
  fetched: false,
  modalVisible: false,
  openModal: () => set({ modalVisible: true }),
  closeModal: () => set({ modalVisible: false }),
  getQRCodeValue: () => {
    const { userId, otpCode } = get();
    if (userId === -1 || otpCode === "") {
      return null;
    }

    return `${userId};${otpCode}`;
  },
  refetchQRCode: async () => {
    const response = await apiClientAxios.get(`/me?${new Date().getTime()}`);
    set({
      fetched: true,
      otpCode: response.data.otp_code ?? "",
      userId: response.data.id ?? -1,
    });
  },
  addFriend: async (targetId, otpCode) => {
    const { closeModal } = get();

    if (targetId === -1) {
      return;
    }

    if (targetId === get().userId) {
      alert("You can't add yourself as a friend.");
      return;
    }

    try {
      const response = await apiClientAxios.post(`/friendships`, {
        target_id: targetId,
        _otp_code: otpCode,
      });

      closeModal();

      browserHistory.push(`/contacts/${response.data?.id}`);
    } catch (error) {
      alert("Could not add friend. Please try again.");
    }
  },
}));
