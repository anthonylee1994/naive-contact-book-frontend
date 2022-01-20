import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaUndo } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useFriendListStore } from "stores/useFriendListStore";

export const RefreshListButton = React.memo(() => {
  const { pathname } = useLocation();
  const size = useBreakpointValue({ base: "md", md: "lg" });
  const fetching = useFriendListStore((state) => state.fetching);
  const fetch = useFriendListStore((state) => state.fetch);

  if (!/\/contacts\/?$/.test(pathname)) {
    return null;
  }

  return (
    <IconButton
      isLoading={fetching}
      size={size}
      aria-label="back"
      position="fixed"
      variant="ghost"
      left={{ base: 2, md: 4 }}
      icon={<Icon as={FaUndo} />}
      onClick={fetch}
    />
  );
});
