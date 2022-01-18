import React from "react";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { Container } from "./Container";
import { FaWhatsapp } from "react-icons/fa";
import { FriendshipsTargetUserContacts } from "api";
import { ActionBar } from "./ActionBar";

interface Props {
  index: number;
  item: FriendshipsTargetUserContacts;
  total: number;
  setItems: React.Dispatch<
    React.SetStateAction<FriendshipsTargetUserContacts[]>
  >;
}

export const WhatsAppItem = React.memo<Props>(
  ({ item, setItems, index, total }) => {
    const value = item?.contact?.phone_number ?? "";

    const onChange: React.ChangeEventHandler<HTMLInputElement> =
      React.useCallback(
        ({ target: { value } }) => {
          setItems((items) => {
            const newItems = [...items];
            newItems[index] = {
              ...item,
              contact: {
                ...item.contact,
                phone_number: value,
              },
            };
            return newItems;
          });
        },
        [index, item, setItems]
      );

    return (
      <Container>
        <Flex w="full" alignItems="center">
          <Icon
            color="whatsapp.400"
            ml={2}
            mr={2}
            fontSize="2xl"
            as={FaWhatsapp}
          />
          <Input
            mt={1}
            ml={1}
            mr={1}
            variant="filled"
            placeholder="Phone number"
            _focus={{ borderColor: "green.300" }}
            value={value}
            onChange={onChange}
          />
        </Flex>
        <ActionBar
          item={item}
          setItems={setItems}
          index={index}
          total={total}
        />
      </Container>
    );
  }
);
