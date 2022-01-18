import React from "react";
import { Flex, Tag, TagCloseButton, TagLeftIcon } from "@chakra-ui/react";
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
      >
        {tags.map((tag, index) => (
          <Tag cursor="pointer" key={index} m={1}>
            {tag.value}
            <TagCloseButton
              _focus={{}}
              onClick={() => removeTag(Number(id), tag.id!)}
            />
          </Tag>
        ))}
        <Tag
          cursor="pointer"
          colorScheme="green"
          onClick={() => setModalVisible(true)}
          m={1}
        >
          <TagLeftIcon as={FaPlus} />
          Add Tag
        </Tag>
      </Flex>
      <AddTagModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(value) => addTag(Number(id), value)}
      />
    </React.Fragment>
  );
});
