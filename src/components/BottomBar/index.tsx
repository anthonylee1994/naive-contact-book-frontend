import React from "react";
import { Item } from "components/BottomBar/Item";
import { FaList, FaUser } from "react-icons/fa";
import { Flex, TabList, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomBar = React.memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const tabIndex = React.useMemo(() => {
    if (pathname.startsWith("/contacts")) {
      return 0;
    } else if (pathname.startsWith("/profile")) {
      return 1;
    }
  }, [pathname]);

  const toContact = React.useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const toProfile = React.useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <Flex
      zIndex={2}
      w="100%"
      bottom={0}
      position="fixed"
      justifyContent="center"
      bgColor="gray.700"
      boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
    >
      <Tabs
        index={tabIndex}
        w="100%"
        isFitted
        variant="line"
        colorScheme="green"
      >
        <TabList>
          <Item onClick={toContact} icon={FaList} label="Contacts" />
          <Item onClick={toProfile} icon={FaUser} label="Profile" />
        </TabList>
      </Tabs>
    </Flex>
  );
});
