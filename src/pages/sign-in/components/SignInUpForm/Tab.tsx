import React from "react";
import { Tab as TabBase, TabProps } from "@chakra-ui/react";

export const Tab = React.memo((props: TabProps) => {
  return (
    <TabBase
      width="full"
      _focus={{ boxShadow: "none" }}
      borderTopRadius="xl"
      borderBottomRadius={0}
      bgColor="gray.600"
      paddingTop={3}
      paddingBottom={3}
      paddingLeft={8}
      paddingRight={8}
      _selected={{ bgColor: "gray.700" }}
      color="white"
      fontSize="md"
      {...props}
    />
  );
});
