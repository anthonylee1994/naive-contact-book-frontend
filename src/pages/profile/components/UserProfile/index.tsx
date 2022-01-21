import React from "react";
import { Divider, Flex } from "@chakra-ui/react";
import { ProfileAvatar } from "pages/profile/components/UserProfile/ProfileAvatar";
import { ProfileName } from "./ProfileName";
import { UserContactList } from "./UserContactList";
import { CopySecretButton } from "./CopySecretButton";

export const UserProfile = React.memo(() => {
  return (
    <Flex flexDirection="column" alignItems="center" mb={{ base: 5, md: 10 }}>
      <ProfileAvatar />
      <ProfileName />
      <UserContactList />
      <Divider />
      <CopySecretButton />
    </Flex>
  );
});
