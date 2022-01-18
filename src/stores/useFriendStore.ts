import { InlineResponse200 } from "api";
import { apiClient } from "utils/apiClient";
import create from "zustand";

interface FriendStore {
  fetching: boolean;
  friend: InlineResponse200 | null;
  fetch(id: number): void;
}

export const useFriendStore = create<FriendStore>((set, get) => ({
  fetching: false,
  friend: null,
  fetch: async (id) => {
    if (!id) {
      return;
    }

    try {
      set({ fetching: true });
      const response = await apiClient.friendshipsIdGet(id);
      set({ fetching: false, friend: response.data });
    } catch (error) {
      set({ fetching: false });
    }
  },
}));
