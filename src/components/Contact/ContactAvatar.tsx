import React from "react";
import { Avatar } from "components/Avatar";

interface Props {
  src?: string | null | undefined;
}

export const ContactAvatar = React.memo<Props>(({ src }) => {
  return (
    <Avatar
      mt={6}
      ml={4}
      mr={4}
      mb={3}
      width="128px"
      height="128px"
      src={src ?? undefined}
    />
  );
});
