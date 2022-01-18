import React from "react";
import { Flex } from "@chakra-ui/react";
import { ProfileAvatar } from "pages/profile/components/UserProfile/ProfileAvatar";
import { ProfileName } from "./ProfileName";
import { UserContactList } from "./UserContactList";

export const UserProfile = React.memo(() => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <ProfileAvatar />
      <ProfileName />
      <UserContactList />
    </Flex>
  );
});
