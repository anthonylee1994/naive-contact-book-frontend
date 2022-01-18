import React from "react";
import { Icon, Tab, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  label: string;
  icon: IconType;
  onClick: () => void;
}

export const Item = React.memo<Props>(({ label, icon, onClick }) => {
  return (
    <Tab
      d="flex"
      flexDirection="column"
      pt={2.5}
      pb={1.5}
      pl={8}
      pr={8}
      _focus={{}}
      onClick={onClick}
    >
      <Icon mb={1} as={icon} />
      <Text fontSize="xs">{label}</Text>
    </Tab>
  );
});
