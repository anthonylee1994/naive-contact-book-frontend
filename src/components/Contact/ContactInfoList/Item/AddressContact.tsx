import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FaMap } from "react-icons/fa";
import { Container } from "./Container";

interface Props {
  address: string;
}

export const AddressContact = React.memo<Props>(({ address }) => {
  return (
    <Container
      onClick={() =>
        window.open(
          `https://www.google.com/maps/search/${encodeURIComponent(address)}/`
        )
      }
    >
      <Icon color="red.400" fontSize="2xl" as={FaMap} />
      <Text whiteSpace="break-spaces" ml={4}>
        {address}
      </Text>
    </Container>
  );
});
