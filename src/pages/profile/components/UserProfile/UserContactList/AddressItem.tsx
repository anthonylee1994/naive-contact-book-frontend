import React from "react";
import { Flex, Icon, Textarea } from "@chakra-ui/react";
import { Container } from "./Container";
import { FaMap } from "react-icons/fa";
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

export const AddressItem = React.memo<Props>(
  ({ item, setItems, index, total }) => {
    const value = item?.contact?.address ?? "";

    const onChange: React.ChangeEventHandler<HTMLTextAreaElement> =
      React.useCallback(
        ({ target: { value } }) => {
          setItems((items) => {
            const newItems = [...items];
            newItems[index] = {
              ...item,
              contact: {
                ...item.contact,
                address: value,
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
          <Icon color="red.400" ml={2} mr={2} fontSize="2xl" as={FaMap} />
          <Textarea
            value={value}
            onChange={onChange}
            rows={5}
            mt={1}
            ml={1}
            mr={1}
            variant="filled"
            placeholder="Address"
            _focus={{ borderColor: "green.300" }}
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
