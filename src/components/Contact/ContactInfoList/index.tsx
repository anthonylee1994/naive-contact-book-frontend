import { Flex } from "@chakra-ui/react";
import { FriendshipsTargetUserContacts } from "api";
import { sortBy } from "lodash";
import React from "react";
import { Item } from "./Item";

interface Props {
  items: FriendshipsTargetUserContacts[];
}

export const ContactInfoList = React.memo<Props>(({ items }) => {
  return (
    <Flex w="full" pt={4} pb={6} pl={4} pr={4} width="full">
      <Flex width="full" flexDirection="column">
        {sortBy(items, ["display_order"]).map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </Flex>
    </Flex>
  );
});
