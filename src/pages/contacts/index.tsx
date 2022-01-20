import React from "react";
import { ContactItem } from "components/Contact/ContactItem";
import { useFriendListStore } from "stores/useFriendListStore";
import { Container } from "components/Container";
import { SearchBar } from "./components/SearchBar";
import { Flex } from "@chakra-ui/react";
import { NoContacts } from "components/EmptyPlaceholders/NoContacts";

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
      <Flex
        mt={{ base: "56px", md: "64px" }}
        flexDirection="column"
        flex={1}
        transition="100ms ease-in-out"
      >
        {friends.length ? (
          friends.map((friend, key) => <ContactItem item={friend} key={key} />)
        ) : (
          <NoContacts />
        )}
      </Flex>
    </Container>
  );
});
