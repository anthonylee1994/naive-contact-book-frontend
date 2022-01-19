import { InlineResponse200 } from "api";
import { apiClient, apiClientAxios } from "utils/apiClient";
import { browserHistory } from "utils/browserHistory";
import create from "zustand";

interface FriendStore {
  updatingTag: boolean;
  fetching: boolean;
  deleting: boolean;
  friend: InlineResponse200 | null;
  fetch(id: number): void;
  unfriend(id: number): void;
  addTag(id: number, tagName: string): void;
  removeTag(id: number, tagId: number): void;
}

export const useFriendStore = create<FriendStore>((set, get) => ({
  updatingTag: false,
  fetching: false,
  deleting: false,
  friend: null,
  addTag: async (id, tagName) => {
    if (!id) {
      return;
    }

    try {
      set({ updatingTag: true });
      const response = await apiClientAxios.put(`/friendships/${id}`, {
        tags_attributes: [{ value: tagName }],
      });
      set({ friend: response.data, updatingTag: false });
    } catch (error) {
      set({ updatingTag: false });
    }
  },
  removeTag: async (id, tagId) => {
    if (!id) {
      return;
    }

    try {
      set({ updatingTag: true });
      const response = await apiClientAxios.put(`/friendships/${id}`, {
        tags_attributes: [{ id: tagId, _destroy: true }],
      });
      set({ friend: response.data, updatingTag: false });
    } catch (error) {}
  },
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
  unfriend: async (id) => {
    if (!id) {
      return;
    }

    try {
      set({ deleting: true });
      await apiClient.friendshipsIdDelete(id);
      browserHistory.push("/contacts");
      set({ deleting: false });
    } catch (error) {
      set({ deleting: false });
    }
  },
}));
