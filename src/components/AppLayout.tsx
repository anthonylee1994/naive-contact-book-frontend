import { Flex } from "@chakra-ui/react";
import React from "react";

export const AppLayout = React.memo(({ children }) => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
});
