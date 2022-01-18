import { Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const BackButton = React.memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (!/^\/contacts\/\d+/.test(pathname)) {
    return null;
  }

  return (
    <IconButton
      aria-label="back"
      position="fixed"
      variant="ghost"
      left={2}
      icon={<Icon as={FaArrowLeft} />}
      onClick={() => navigate(-1)}
    />
  );
});
