import React from "react";
import { InlineResponse200 } from "api";
import { Flex, Tag, Text } from "@chakra-ui/react";
import { Avatar } from "../Avatar";
import { useNavigate } from "react-router-dom";

interface Props {
  item: InlineResponse200;
}

export const ContactItem = React.memo<Props>(({ item }) => {
  const navigate = useNavigate();
  const name = item.target?.name;
  const tags = (item.tags ?? []).map(({ value }) => value);

  const avatarUrl = React.useMemo(
    () => item.target?.avatar_url ?? undefined,
    [item.target?.avatar_url]
  );

  return (
    <Flex
      p={2}
      alignItems="center"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      transition="100ms ease-in-out"
      _active={{ bgColor: "gray.700" }}
      onClick={() => navigate(`/contacts/${item.id}`)}
    >
      <Avatar mr={3} src={avatarUrl} />
      <Flex flexDirection="column">
        <Text fontSize="lg" mb={1}>
          {name}
        </Text>
        <Flex flexWrap="wrap">
          {tags.map((tag) => (
            <Tag key={tag} size="sm" m={0.5}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
});
