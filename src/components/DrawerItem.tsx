import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon?: IconType;
  onClick: () => void;
  label: string;
}

export const DrawerItem = React.memo<Props>(({ icon, label, onClick }) => {
  return (
    <Flex
      pt={4}
      pb={4}
      pl={8}
      pr={8}
      _first={{ borderTopRadius: { base: 0, md: "md" } }}
      userSelect="none"
      cursor="pointer"
      alignItems="center"
      _active={{ bgColor: "gray.600" }}
      transition="100ms ease-in-out"
      onClick={onClick}
    >
      {icon && <Icon as={icon} mr={4} />}
      <Text>{label}</Text>
    </Flex>
  );
});
