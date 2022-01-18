import create from "zustand";
import { InlineResponse200 } from "api";
import { apiClient } from "utils/apiClient";

interface FriendListStore {
  fetching: boolean;
  filter: { by: "name" | "tag"; keyword: string };
  friends: InlineResponse200[];
  fetch(): void;
  setKeyword(keyword: string): void;
  toggleFilterType(): void;
}

export const useFriendListStore = create<FriendListStore>((set, get) => ({
  filter: {
    by: "name",
    keyword: "",
  },
  fetchError: false,
  fetching: false,
  friends: [],
  toggleFilterType: () => {
    set((state) => ({
      filter: {
        ...state.filter,
        by: state.filter.by === "name" ? "tag" : "name",
      },
    }));
  },
  setKeyword: (keyword: string) => {
    set((state) => ({
      filter: {
        ...state.filter,
        keyword,
      },
    }));
  },
  fetch: async () => {
    try {
      set({ fetching: true });
      const {
        filter: { by, keyword },
      } = get();

      const response = await apiClient.friendshipsGet(
        keyword && by === "tag" ? keyword : undefined,
        keyword && by === "name" ? keyword : undefined
      );
      set({ fetching: false, friends: response.data });
    } catch (error) {
      set({ fetching: false });
    }
  },
}));
