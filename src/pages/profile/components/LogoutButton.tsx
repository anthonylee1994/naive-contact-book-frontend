import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LogoutButton = React.memo(() => {
  const navigate = useNavigate();

  return (
    <Button
      bgColor="red.500"
      _active={{ bgColor: "red.700" }}
      _hover={{ bgColor: "red.500" }}
      onClick={() => navigate("/sign-out")}
      mt={2}
      ml={4}
      mr={4}
      mb={8}
    >
      Logout
    </Button>
  );
});
