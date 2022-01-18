import React from "react";
import {
  Image,
  Avatar as AvatarBase,
  ImageProps,
  AvatarProps,
} from "@chakra-ui/react";

export const Avatar = React.memo<ImageProps>((props) => {
  if (!props.src) {
    return (
      <AvatarBase
        bgColor="gray.600"
        width="48px"
        height="48px"
        {...(props as AvatarProps)}
      />
    );
  }

  return (
    <Image
      bgColor="gray.600"
      borderRadius="full"
      width="48px"
      height="48px"
      {...props}
    />
  );
});
