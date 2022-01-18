import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  name: string;
}

export const ContactName = React.memo<Props>(({ name }) => {
  return <Text fontSize="2xl">{name}</Text>;
});
