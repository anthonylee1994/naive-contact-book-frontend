import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BackButton } from "./BackButton";
import { ShareButton } from "./ShareButton";
import { LogoutButton } from "./LogoutButton";
import { RefreshListButton } from "./RefreshListButton";
import { RefreshProfileButton } from "./RefreshProfileButton";

export const TopBar = React.memo(() => {
  return (
    <Flex
      userSelect="none"
      p={{ base: 3, md: 4 }}
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
      <RefreshListButton />
      <RefreshProfileButton />
      <LogoutButton />
      <BackButton />
      <ShareButton />
      <Flex alignItems="center">
        <Icon fontSize="2xl" as={RiContactsBook2Fill} mr={{ base: 1, md: 2 }} />
        <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
          Naive Contact
        </Text>
      </Flex>
    </Flex>
  );
});
