import React from "react";
import { Avatar } from "components/Avatar";
import { useBreakpointValue } from "@chakra-ui/react";

interface Props {
  src?: string | null | undefined;
}

export const ContactAvatar = React.memo<Props>(({ src }) => {
  const size = useBreakpointValue({ base: "128px", sm: "135px", md: "256px" });

  return (
    <Avatar
      mt={6}
      ml={4}
      mr={4}
      mb={3}
      width={size}
      height={size}
      src={src ?? undefined}
    />
  );
});
