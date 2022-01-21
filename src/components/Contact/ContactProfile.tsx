import { Flex } from "@chakra-ui/react";
import { InlineResponse200 } from "api";
import { ContactAvatar } from "components/Contact/ContactAvatar";
import { ContactInfoList } from "components/Contact/ContactInfoList";
import { ContactName } from "components/Contact/ContactName";
import React from "react";
import { EditableContactTags } from "./EditableContactTags";
import { ExportButton } from "./ExportButton";
import { UnfriendButton } from "./UnfriendButton";

interface Props {
  friendship?: InlineResponse200 | null;
}

export const ContactProfile = React.memo<Props>(({ friendship }) => {
  if (!friendship || !friendship.target) {
    return null;
  }

  const avatarUrl = friendship.target?.avatar_url;
  const name = friendship.target?.name ?? "";
  const tags = friendship.tags ?? [];
  const userContacts = friendship.target?.user_contacts ?? [];

  return (
    <Flex
      margin="0 auto"
      w="full"
      maxW={600}
      flexDirection="column"
      alignItems="center"
      mb={{ base: 5, md: 10 }}
    >
      <ContactAvatar src={avatarUrl} isLoaded />
      <ContactName name={name} />
      <EditableContactTags tags={tags} />
      <ContactInfoList items={userContacts} />

      <Flex flexDirection="column" width="full" mt={-1} pl={4} pr={4} pb={6}>
        <ExportButton friendship={friendship} />
        <UnfriendButton mt={4} />
      </Flex>
    </Flex>
  );
});
