import React from "react";
import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Tab } from "./Tab";
import { useSignInUpStore } from "../../stores/useSignInUpStore";
import { SignUpForm } from "./SignUpForm";
import { SignInForm } from "./SignInForm";

export const SignInUpForm = React.memo(() => {
  const tabIndex = useSignInUpStore((state) => state.tabIndex);
  const setTabIndex = useSignInUpStore((state) => state.setTabIndex);

  return (
    <Tabs
      index={tabIndex}
      align="center"
      width="xs"
      variant="soft-rounded"
      colorScheme="gray"
      onChange={setTabIndex}
    >
      <TabList>
        <Tab borderTopRightRadius={0}>SIGN UP</Tab>
        <Tab borderTopLeftRadius={0}>SIGN IN</Tab>
      </TabList>
      <TabPanels bgColor="gray.700" borderBottomRadius="lg">
        <TabPanel>
          <SignUpForm />
        </TabPanel>
        <TabPanel>
          <SignInForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
});
