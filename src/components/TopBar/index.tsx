import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BackButton } from "./BackButton";

export const TopBar = React.memo(() => {
  return (
    <Flex
      p={3}
      top={0}
      zIndex={2}
      d="flex"
      width="full"
      position="fixed"
      bgColor="green.500"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
    >
      <BackButton />
      <Flex alignItems="center">
        <Icon fontSize="2xl" as={RiContactsBook2Fill} mr={1} />
        <Text fontWeight="bold" fontSize="xl">
          Naive Contact
        </Text>
      </Flex>
    </Flex>
  );
});
