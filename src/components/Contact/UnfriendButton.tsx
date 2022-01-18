import React from "react";
import { Button } from "@chakra-ui/react";
import { useFriendStore } from "stores/useFriendStore";
import { useParams } from "react-router-dom";

export const UnfriendButton = React.memo(() => {
  const { id } = useParams<{ id: string }>();
  const unfriend = useFriendStore((state) => state.unfriend);
  const deleting = useFriendStore((state) => state.deleting);

  return (
    <Button
      width="full"
      bgColor="red.500"
      isLoading={deleting}
      _active={{ bgColor: "red.700" }}
      _hover={{ bgColor: "red.500" }}
      onClick={() => unfriend(Number(id))}
    >
      Unfriend
    </Button>
  );
});
