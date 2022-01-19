import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const LogoutButton = React.memo(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const size = useBreakpointValue({ base: "md", md: "lg" });

  if (!pathname.startsWith("/profile")) {
    return null;
  }

  return (
    <IconButton
      size={size}
      aria-label="back"
      position="fixed"
      variant="ghost"
      left={{ base: 2, md: 4 }}
      icon={<Icon as={FaPowerOff} />}
      onClick={() => navigate("/sign-out")}
    />
  );
});
