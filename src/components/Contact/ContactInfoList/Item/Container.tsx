import React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const Container = React.memo<Props>(({ children, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      cursor="pointer"
      userSelect="none"
      transition="100ms ease-in-out"
      bgColor="gray.700"
      _active={{ bgColor: "gray.600" }}
      _first={{
        borderTopRadius: "md",
        bgColor: "gray.700",
        _active: { bgColor: "gray.600" },
      }}
      _last={{
        borderBottomRadius: "md",
        bgColor: "gray.700",
        _active: { bgColor: "gray.600" },
      }}
      alignItems="center"
      p={3}
      _notLast={{
        borderBottomColor: "gray.600",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}
    >
      {children}
    </Flex>
  );
});
