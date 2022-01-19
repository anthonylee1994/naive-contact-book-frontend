import { FriendshipsTargetUserContacts } from "api";
import { omit } from "lodash";
import { apiClient, apiClientAxios } from "utils/apiClient";
import create from "zustand";
import { useAuthStore } from "./useAuthStore";

interface ProfileStore {
  editMode: boolean;
  updatingName: boolean;
  updatingAvatar: boolean;
  updatingUserContacts: boolean;
  removeAvatar: () => void;
  uploadAvatar: (file: File) => void;
  updateName: (name: string) => void;
  setEditMode: (editMode: boolean) => void;
  updateUserContacts: (contacts: FriendshipsTargetUserContacts[]) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  editMode: false,
  updatingName: false,
  updatingAvatar: false,
  updatingUserContacts: false,
  setEditMode: (editMode) => set(() => ({ editMode })),
  async removeAvatar() {
    try {
      set({ updatingAvatar: true });
      const response = await apiClient.mePut(undefined, undefined, true);
      useAuthStore.getState().setUser(response.data);
      set({ updatingAvatar: false });
    } catch (error) {
      console.error(error);
      set({ updatingAvatar: false });
    }
  },
  async uploadAvatar(file) {
    try {
      set({ updatingAvatar: true });
      const formData = new FormData();
      formData.append("_avatar_attributes[file]", file);
      const response = await apiClientAxios.put("/me", formData);
      useAuthStore.getState().setUser(response.data);
      set({ updatingAvatar: false });
    } catch (error) {
      console.error(error);
      set({ updatingAvatar: false });
    }
  },
  async updateName(name) {
    try {
      set({ updatingName: true });
      const response = await apiClient.mePut(name, undefined, undefined);
      useAuthStore.getState().setUser(response.data);
      set({ updatingName: false });
    } catch (error) {
      set({ updatingName: false });
    }
  },
  async updateUserContacts(contacts) {
    try {
      set({ updatingUserContacts: true });

      const oldContacts = useAuthStore.getState().user?.user_contacts ?? [];

      const newContacts = contacts.map((contact, index) => ({
        index,
        ...contact,
      }));

      const contactsToAdd = newContacts.filter(
        (contact) => !contact.id && !!contact.contact_type
      );

      const contactIdsToDelete = oldContacts
        .filter((contact) => !newContacts.find((c) => c.id === contact.id))
        .map(({ id }) => id);

      const contactsToUpdate = newContacts.filter(
        (contact) => contact.id && contactIdsToDelete.indexOf(contact.id) === -1
      );

      const formatContactAttributes = (
        userContact: FriendshipsTargetUserContacts
      ) => {
        if (userContact.contact_type === "WhatsAppContact") {
          return {
            phone_number: userContact.contact?.phone_number,
          };
        } else if (userContact.contact_type === "TelegramContact") {
          return {
            username: userContact.contact?.username,
          };
        } else if (userContact.contact_type === "AddressContact") {
          return {
            address: userContact.contact?.address,
          };
        }
      };

      const userContactsAttributes = [
        ...contactIdsToDelete.map((id) => ({ id, _destroy: true })),
        ...[
          ...contactsToUpdate.map((userContact) => ({
            id: userContact.id,
            index: userContact.index,
            contact_attributes: formatContactAttributes(userContact),
          })),
          ...contactsToAdd.map((userContact) => ({
            index: userContact.index,
            contact_type: userContact.contact_type,
            contact_attributes: formatContactAttributes(userContact),
          })),
        ]
          .sort((a, b) => a.index - b.index)
          .map((item, index) => ({
            ...omit(item, ["index"]),
            display_order: index,
          })),
      ];

      const response = await apiClientAxios.put("/me", {
        user_contacts_attributes: userContactsAttributes,
      });

      useAuthStore.getState().setUser(response.data);

      set({ updatingUserContacts: false, editMode: false });
    } catch (error) {
      console.error(error);
      set({ updatingUserContacts: false, editMode: false });
    }
  },
}));
