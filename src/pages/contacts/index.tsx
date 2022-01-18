import React from "react";
import { ContactItem } from "components/Contact/ContactItem";
import { useFriendListStore } from "stores/useFriendListStore";
import { Container } from "components/Container";
import { SearchBar } from "./components/SearchBar";
import { Flex, Text } from "@chakra-ui/react";

export const Contacts = React.memo(() => {
  const friends = useFriendListStore((state) => state.friends);
  const fetchFriends = useFriendListStore((state) => state.fetch);
  const filterType = useFriendListStore((state) => state.filter.by);
  const setKeyword = useFriendListStore((state) => state.setKeyword);

  React.useEffect(() => {
    setKeyword("");
    fetchFriends();
  }, [filterType, setKeyword, fetchFriends]);

  return (
    <Container>
      <SearchBar />
      <Flex mt="56px" flexDirection="column" flex={1}>
        {friends.length ? (
          friends.map((friend, key) => <ContactItem item={friend} key={key} />)
        ) : (
          <Text
            height="100%"
            d="flex"
            flex={1}
            p={2}
            width="full"
            alignItems="center"
            justifyContent="center"
            color="gray.400"
          >
            No Content
          </Text>
        )}
      </Flex>
    </Container>
  );
});
