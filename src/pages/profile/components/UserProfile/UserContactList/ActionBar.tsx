import React from "react";
import { Flex, IconButton, Icon } from "@chakra-ui/react";
import { FriendshipsTargetUserContacts } from "api";
import { FaArrowUp, FaArrowDown, FaTrash } from "react-icons/fa";

interface Props {
  item: FriendshipsTargetUserContacts;
  setItems: React.Dispatch<
    React.SetStateAction<FriendshipsTargetUserContacts[]>
  >;
  index: number;
  total: number;
}

export const ActionBar = React.memo<Props>(({ setItems, index, total }) => {
  const onMoveUp = React.useCallback(() => {
    setItems((items) => {
      const newItems = [...items];
      const temp = newItems[index - 1];
      newItems[index - 1] = newItems[index];
      newItems[index] = temp;
      return newItems;
    });
  }, [index, setItems]);

  const onMoveDown = React.useCallback(() => {
    setItems((items) => {
      const newItems = [...items];
      const temp = newItems[index + 1];
      newItems[index + 1] = newItems[index];
      newItems[index] = temp;
      return newItems;
    });
  }, [index, setItems]);

  const onDelete = React.useCallback(() => {
    setItems((items) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
  }, [index, setItems]);

  return (
    <Flex w="full" alignItems="center" justifyContent="space-between" mt={1}>
      <Flex>
        <IconButton
          m={1}
          size="sm"
          aria-label="up"
          disabled={index === 0}
          icon={<Icon as={FaArrowUp} />}
          onClick={onMoveUp}
        />
        <IconButton
          m={1}
          size="sm"
          aria-label="down"
          disabled={index === total - 1}
          icon={<Icon as={FaArrowDown} />}
          onClick={onMoveDown}
        />
      </Flex>
      <IconButton
        ml={2}
        mr={1}
        size="sm"
        aria-label="delete"
        icon={<Icon as={FaTrash} />}
        onClick={onDelete}
      />
    </Flex>
  );
});
