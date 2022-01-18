import React from "react";
import {
  Image,
  Avatar as AvatarBase,
  ImageProps,
  AvatarProps,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Avatar = React.memo<ImageProps>((props) => {
  const size = useBreakpointValue({ base: "48px", md: "64px" });

  if (!props.src) {
    return (
      <AvatarBase
        bgColor="gray.600"
        width={size}
        height={size}
        {...(props as AvatarProps)}
      />
    );
  }

  return (
    <Image
      bgColor="gray.600"
      borderRadius="full"
      width={size}
      height={size}
      {...props}
    />
  );
});
