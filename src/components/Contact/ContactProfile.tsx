import { Flex } from "@chakra-ui/react";
import { InlineResponse200 } from "api";
import { ContactAvatar } from "components/Contact/ContactAvatar";
import { ContactInfoList } from "components/Contact/ContactInfoList";
import { ContactName } from "components/Contact/ContactName";
import React from "react";
import { ContactTags } from "./ContactTags";

interface Props {
  friendship?: InlineResponse200 | null;
}

export const ContactProfile = React.memo<Props>(({ friendship }) => {
  if (!friendship || !friendship.target) {
    return null;
  }

  const avatarUrl = friendship.target?.avatar_url;
  const name = friendship.target?.name ?? "";
  const tags = friendship.tags?.map(({ value }) => value!) ?? [];
  const userContacts = friendship.target?.user_contacts ?? [];

  return (
    <Flex flexDirection="column" alignItems="center">
      <ContactAvatar src={avatarUrl} />
      <ContactName name={name} />
      <ContactTags tags={tags} />
      <ContactInfoList items={userContacts} />
    </Flex>
  );
});