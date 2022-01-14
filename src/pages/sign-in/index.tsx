import React from "react";
import { AppTitle } from "../../components/AppTitle";
import { AppLayout } from "../../components/AppLayout";
import { SignInUpForm } from "./components/SignInUpForm";

export const SignIn = React.memo(() => {
  return (
    <AppLayout>
      <AppTitle mb={8} />
      <SignInUpForm />
    </AppLayout>
  );
});
