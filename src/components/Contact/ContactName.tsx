import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  name: string;
}

export const ContactName = React.memo<Props>(({ name }) => {
  return (
    <Text m={{ base: 0, md: 2 }} fontSize={{ base: "2xl", md: "3xl" }}>
      {name}
    </Text>
  );
});
