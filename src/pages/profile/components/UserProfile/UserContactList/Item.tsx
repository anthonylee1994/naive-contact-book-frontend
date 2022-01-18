import { FriendshipsTargetUserContacts } from "api";
import React from "react";
import { AddressItem } from "./AddressItem";
import { NewItem } from "./NewItem";
import { TelegramItem } from "./TelegramItem";
import { WhatsAppItem } from "./WhatsAppItem";

interface Props {
  index: number;
  total: number;
  item: FriendshipsTargetUserContacts;
  setItems: React.Dispatch<
    React.SetStateAction<FriendshipsTargetUserContacts[]>
  >;
}

export const Item = React.memo<Props>(({ item, setItems, index, total }) => {
  if (item.contact_type === "WhatsAppContact") {
    return (
      <WhatsAppItem
        total={total}
        item={item}
        setItems={setItems}
        index={index}
      />
    );
  } else if (item.contact_type === "TelegramContact") {
    return (
      <TelegramItem
        total={total}
        item={item}
        setItems={setItems}
        index={index}
      />
    );
  } else if (item.contact_type === "AddressContact") {
    return (
      <AddressItem
        total={total}
        item={item}
        setItems={setItems}
        index={index}
      />
    );
  }

  return (
    <NewItem total={total} item={item} setItems={setItems} index={index} />
  );
});
