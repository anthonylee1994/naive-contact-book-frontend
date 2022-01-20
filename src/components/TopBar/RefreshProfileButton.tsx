import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaUndo } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { useFriendStore } from "stores/useFriendStore";

export const RefreshProfileButton = React.memo(() => {
  const { pathname } = useLocation();
  const params = useParams();

  const contactId = Number(
    (params["*"] ?? "").replace(/(contacts|\/)/g, "").replaceAll("/", "")
  );

  const size = useBreakpointValue({ base: "md", md: "lg" });
  const fetching = useFriendStore((state) => state.fetching);
  const fetch = useFriendStore((state) => state.fetch);

  if (!/\/contacts\/\d+\/?$/.test(pathname)) {
    return null;
  }

  return (
    <IconButton
      isLoading={fetching}
      size={size}
      aria-label="back"
      position="fixed"
      variant="ghost"
      right={{ base: 2, md: 4 }}
      icon={<Icon as={FaUndo} />}
      onClick={() => fetch(contactId)}
    />
  );
});
