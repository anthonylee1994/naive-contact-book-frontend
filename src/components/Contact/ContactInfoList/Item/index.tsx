import React from "react";
import { FriendshipsTargetUserContacts } from "api";
import { WhatsAppContact } from "./WhatsAppContact";
import { TelegramContact } from "./TelegramContact";
import { AddressContact } from "./AddressContact";

interface Props {
  item: FriendshipsTargetUserContacts;
}

export const Item = React.memo<Props>(({ item }) => {
  if (!item.contact) {
    return null;
  }

  if (item.contact_type === "WhatsAppContact") {
    return <WhatsAppContact phoneNumber={item.contact.phone_number!} />;
  } else if (item.contact_type === "TelegramContact") {
    return <TelegramContact username={item.contact.username!} />;
  } else if (item.contact_type === "AddressContact") {
    return <AddressContact address={item.contact.address!} />;
  }

  return null;
});
