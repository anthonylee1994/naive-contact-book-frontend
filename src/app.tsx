import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "pages";
import { SignIn } from "pages/sign-in";
import { SignOut } from "pages/sign-out";
import { useAuthStore } from "stores/useAuthStore";

export const App = React.memo(() => {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  React.useEffect(checkAuth, [checkAuth]);

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-out" element={<SignOut />} />
      <Route path="*" element={<Index />} />
    </Routes>
  );
});
