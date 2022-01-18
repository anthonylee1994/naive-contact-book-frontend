import React from "react";
import { useAuthStore } from "stores/useAuthStore";

export const SignOut = React.memo(() => {
  const signOut = useAuthStore((state) => state.signOut);

  React.useEffect(signOut, [signOut]);

  return null;
});
