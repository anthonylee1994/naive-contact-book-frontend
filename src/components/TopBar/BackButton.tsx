import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const BackButton = React.memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const size = useBreakpointValue({ base: "md", md: "lg" });

  if (!/^\/contacts\/\d+/.test(pathname)) {
    return null;
  }

  return (
    <IconButton
      aria-label="back"
      position="fixed"
      variant="ghost"
      size={size}
      left={2}
      icon={<Icon as={FaArrowLeft} />}
      onClick={() => navigate("/contacts")}
    />
  );
});
