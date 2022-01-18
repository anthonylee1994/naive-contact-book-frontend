import { Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const LogoutButton = React.memo(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!pathname.startsWith("/profile")) {
    return null;
  }

  return (
    <IconButton
      aria-label="back"
      position="fixed"
      variant="ghost"
      left={2}
      icon={<Icon as={FaPowerOff} />}
      onClick={() => navigate("/sign-out")}
    />
  );
});
