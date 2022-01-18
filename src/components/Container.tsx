import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = React.memo((props: FlexProps) => {
  return (
    <Flex
      flexDirection="column"
      minHeight={{ base: "calc(100vh - 56px)", md: "calc(100vh - 62px)" }}
      pt={{ base: "54px", md: "68px" }}
      mb={{ base: "54px", md: "54px" }}
      {...props}
    />
  );
});
