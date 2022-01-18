import { Progress } from "@chakra-ui/react";
import { ContactProfile } from "components/Contact/ContactProfile";
import { Container } from "components/Container";
import React from "react";
import { useParams } from "react-router-dom";
import { useFriendStore } from "stores/useFriendStore";

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
    <Container>
      {fetching ? (
        <Progress colorScheme="green" height={1} isIndeterminate />
      ) : (
        <ContactProfile friendship={friend!} />
      )}
    </Container>
  );
});
