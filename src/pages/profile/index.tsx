import React from "react";
import { Container } from "components/Container";
import { UserProfile } from "pages/profile/components/UserProfile";
import { useAuthStore } from "stores/useAuthStore";

export const Profile = React.memo(() => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <Container maxW={600} ml="auto" mr="auto">
      <UserProfile />
    </Container>
  );
});
