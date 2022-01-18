import React from "react";
import { Flex } from "@chakra-ui/react";

export const Container = React.memo(({ children }) => {
  return (
    <Flex
      flexDirection="column"
      mb={2}
      p={1}
      alignItems="center"
      borderRadius="md"
      bgColor="gray.700"
    >
      {children}
    </Flex>
  );
});
