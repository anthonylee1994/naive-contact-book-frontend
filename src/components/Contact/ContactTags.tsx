import { Flex, Tag } from "@chakra-ui/react";
import React from "react";

interface Props {
  tags: string[];
}

export const ContactTags = React.memo<Props>(({ tags }) => {
  return (
    <Flex m={1} flexWrap="wrap">
      {tags.map((tag) => (
        <Tag key={tag} size="sm" m={0.5}>
          {tag}
        </Tag>
      ))}
    </Flex>
  );
});
