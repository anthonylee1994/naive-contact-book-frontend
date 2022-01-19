import React from "react";
import {
  Flex,
  Skeleton,
  Tag,
  TagCloseButton,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FriendshipsTags } from "api";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useFriendStore } from "stores/useFriendStore";
import { AddTagModal } from "./AddTagModal";

interface Props {
  tags: FriendshipsTags[];
}

export const EditableContactTags = React.memo<Props>(({ tags }) => {
  const { id } = useParams<{ id: string }>();
  const removeTag = useFriendStore((state) => state.removeTag);
  const updatingTag = useFriendStore((state) => state.updatingTag);
  const addTag = useFriendStore((state) => state.addTag);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Flex
        mt={1}
        ml={4}
        mr={4}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        w="full"
        pl={4}
        pr={4}
      >
        <Skeleton
          d="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          borderRadius="md"
          isLoaded={!updatingTag}
        >
          {tags.map((tag, index) => (
            <Tag userSelect="none" key={index} m={1}>
              {tag.value}
              <TagCloseButton
                _focus={{}}
                onClick={() => removeTag(Number(id), tag.id!)}
              />
            </Tag>
          ))}
          <Tag
            userSelect="none"
            cursor="pointer"
            colorScheme="green"
            onClick={() => setModalVisible(true)}
            m={1}
          >
            <TagLeftIcon as={FaPlus} />
            Add Tag
          </Tag>
        </Skeleton>
      </Flex>
      <AddTagModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(value) => addTag(Number(id), value)}
      />
    </React.Fragment>
  );
});
