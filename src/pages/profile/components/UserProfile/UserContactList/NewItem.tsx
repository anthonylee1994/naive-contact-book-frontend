import React from "react";
import { Container } from "./Container";
import { FriendshipsTargetUserContacts } from "api";
import { ActionBar } from "./ActionBar";
import { Select } from "@chakra-ui/react";

interface Props {
  index: number;
  item: FriendshipsTargetUserContacts;
  total: number;
  setItems: React.Dispatch<
    React.SetStateAction<FriendshipsTargetUserContacts[]>
  >;
}

export const NewItem = React.memo<Props>(({ item, setItems, index, total }) => {
  return (
    <Container>
      <Select
        p={1}
        variant="filled"
        _focus={{ borderColor: "green.300" }}
        placeholder="Select Contact Type"
        onChange={(e) => {
          setItems((items) => [
            ...items.slice(0, index),
            {
              ...items[index],
              contact_type: e.target.value as any,
            },
            ...items.slice(index + 1),
          ]);
        }}
      >
        <option value="TelegramContact">Telegram</option>
        <option value="WhatsAppContact">WhatsApp</option>
        <option value="AddressContact">Address</option>
      </Select>
      <ActionBar item={item} setItems={setItems} index={index} total={total} />
    </Container>
  );
});
