import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { useFriendStore } from "stores/useFriendStore";
import { useParams } from "react-router-dom";
import { ImBlocked } from "react-icons/im";

export const UnfriendButton = React.memo((props: ButtonProps) => {
  const { id } = useParams<{ id: string }>();
  const unfriend = useFriendStore((state) => state.unfriend);
  const deleting = useFriendStore((state) => state.deleting);

  return (
    <Button
      leftIcon={<Icon as={ImBlocked} />}
      width="full"
      bgColor="red.500"
      isLoading={deleting}
      _active={{ bgColor: "red.700" }}
      _hover={{ bgColor: "red.500" }}
      onClick={() => unfriend(Number(id))}
      {...props}
    >
      Unfriend
    </Button>
  );
});
