import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./Container";

interface Props {
  phoneNumber: string;
}

export const WhatsAppContact = React.memo<Props>(({ phoneNumber }) => {
  return (
    <Container onClick={() => window.open(`https://wa.me/${phoneNumber}`)}>
      <Icon color="whatsapp.400" fontSize="2xl" as={FaWhatsapp} />
      <Text ml={4}>{phoneNumber}</Text>
    </Container>
  );
});
