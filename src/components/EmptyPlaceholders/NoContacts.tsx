import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaSadCry } from "react-icons/fa";

export const NoContacts = React.memo(() => {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        color="green.400"
        fontSize={{ base: "90px", md: "120px" }}
        as={FaSadCry}
        mb={4}
      />
      <Text
        fontWeight="bold"
        color="gray.200"
        fontSize={{ base: "xl", md: "2xl" }}
      >
        No Contacts
      </Text>
      <Text mt={2} color="gray.400" fontSize={{ base: "md", md: "lg" }}>
        Please add some friends first
      </Text>
    </Flex>
  );
});
