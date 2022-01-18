import React from "react";
import { Icon, Text, TextProps } from "@chakra-ui/react";
import { RiContactsBook2Fill } from "react-icons/ri";

export const AppTitle = React.memo((props: TextProps) => {
  return (
    <Text
      d="flex"
      alignItems="center"
      fontWeight="bold"
      fontSize={{ base: "3xl", md: "4xl" }}
      {...props}
    >
      <Icon as={RiContactsBook2Fill} mr={2} />
      Naive Contact
    </Text>
  );
});
