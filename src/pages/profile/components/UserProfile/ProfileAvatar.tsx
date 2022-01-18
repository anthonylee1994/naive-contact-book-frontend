import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { ContactAvatar } from "components/Contact/ContactAvatar";
import { DrawerItem } from "components/DrawerItem";
import React from "react";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
import { useAuthStore } from "stores/useAuthStore";
import { useProfileStore } from "stores/useProfileStore";

export const ProfileAvatar = React.memo(() => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const removeAvatar = useProfileStore((state) => state.removeAvatar);
  const uploadAvatar = useProfileStore((state) => state.uploadAvatar);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const avatarUrl = useAuthStore((state) => state.user?.avatar_url);

  return (
    <Flex position="relative">
      <ContactAvatar src={avatarUrl} />
      <IconButton
        variant="solid"
        borderRadius="full"
        position="absolute"
        bottom={2}
        right={2}
        aria-label="edit"
        icon={<Icon as={avatarUrl ? FaEdit : FaUpload} />}
        ref={btnRef}
        onClick={() => {
          if (avatarUrl) {
            setDrawerOpen(true);
          } else {
            inputRef.current?.click();
          }
        }}
      />

      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            uploadAvatar(e.target.files[0]);
          }
          e.target.value = "";
        }}
      />

      <Drawer
        isOpen={isDrawerOpen}
        placement="bottom"
        onClose={() => setDrawerOpen(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerItem
            icon={FaUpload}
            label="Upload"
            onClick={() => {
              setDrawerOpen(false);
              inputRef.current?.click();
            }}
          />
          <DrawerItem
            icon={FaTrash}
            label="Remove"
            onClick={() => {
              setDrawerOpen(false);
              removeAvatar();
            }}
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
});
