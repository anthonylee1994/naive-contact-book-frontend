import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const AppTitle = React.memo((props: TextProps) => {
  return (
    <Text fontWeight="bold" fontSize="4xl" {...props}>
      Naive Contact
    </Text>
  );
});
