import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaPen } from "react-icons/fa";
import { useAuthStore } from "stores/useAuthStore";
import { useProfileStore } from "stores/useProfileStore";
import { EditNameModal } from "./EditNameModal";

export const ProfileName = React.memo(() => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const name = useAuthStore((state) => state.user?.name || "");
  const updateName = useProfileStore((state) => state.updateName);

  return (
    <Flex flexDirection="column" pl={4} pr={4} alignItems="center">
      <Text
        wordBreak="break-all"
        whiteSpace="break-spaces"
        mr={1}
        fontSize="2xl"
        textAlign="center"
      >
        {name}
      </Text>
      <Button
        mt={2}
        size="sm"
        variant="solid"
        leftIcon={<Icon as={FaPen} />}
        aria-label="Edit name"
        onClick={() => setModalVisible(true)}
      >
        Edit Name
      </Button>

      <EditNameModal
        name={name}
        isOpen={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(newName) => {
          setModalVisible(false);
          updateName(newName);
        }}
      />
    </Flex>
  );
});
