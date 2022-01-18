import React from "react";
import { Flex } from "@chakra-ui/react";

export const Container = React.memo(({ children }) => {
  return (
    <Flex
      flexDirection="column"
      minHeight="calc(100vh - 56px)"
      pt="54px"
      mb="56px"
    >
      {children}
    </Flex>
  );
});
