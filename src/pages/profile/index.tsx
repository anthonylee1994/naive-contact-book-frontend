import React from "react";
import { Container } from "components/Container";
import { UserProfile } from "pages/profile/components/UserProfile";
import { useAuthStore } from "stores/useAuthStore";
import { LogoutButton } from "./components/LogoutButton";

export const Profile = React.memo(() => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <UserProfile />
      {/* <LogoutButton /> */}
    </Container>
  );
});
