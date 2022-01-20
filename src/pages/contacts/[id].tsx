import React from "react";
import { Progress } from "@chakra-ui/react";
import { ContactProfile } from "components/Contact/ContactProfile";
import { Container } from "components/Container";
import { useParams } from "react-router-dom";
import { useFriendStore } from "stores/useFriendStore";
import { NoProfile } from "components/EmptyPlaceholders/NoProfile";

export const ContactInfo = React.memo(() => {
  const { id } = useParams<{ id: string }>();

  const friend = useFriendStore((state) => state.friend);
  const fetching = useFriendStore((state) => state.fetching);
  const fetch = useFriendStore((state) => state.fetch);

  React.useEffect(() => {
    if (id) {
      fetch(Number(id));
    }
  }, [fetch, id]);

  return (
    <Container transition="100ms ease-in-out">
      {fetching ? (
        <Progress colorScheme="green" height={1} isIndeterminate />
      ) : friend ? (
        <ContactProfile friendship={friend} />
      ) : (
        <NoProfile />
      )}
    </Container>
  );
});
