import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";
import { Container } from "./Container";

interface Props {
  username: string;
}

export const TelegramContact = React.memo<Props>(({ username }) => {
  return (
    <Container onClick={() => window.open(`https://t.me/${username}`)}>
      <Icon color="telegram.400" fontSize="2xl" as={FaTelegram} />
      <Text ml={4}>{username}</Text>
    </Container>
  );
});
