import React from "react";
import { Avatar } from "components/Avatar";
import { Flex, Skeleton, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  isLoaded?: boolean;
  src?: string | null | undefined;
}

export const ContactAvatar = React.memo<Props>(({ src, isLoaded }) => {
  const size = useBreakpointValue({ base: "128px", sm: "135px", md: "256px" });

  return (
    <Flex mt={6} ml={4} mr={4} mb={3}>
      <Skeleton borderRadius="full" isLoaded={isLoaded}>
        <Avatar width={size} height={size} src={src ?? undefined} />
      </Skeleton>
    </Flex>
  );
});
