import { Button, Flex, Icon, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import { FaPen } from "react-icons/fa";
import { useAuthStore } from "stores/useAuthStore";
import { useProfileStore } from "stores/useProfileStore";
import { EditNameModal } from "./EditNameModal";

export const ProfileName = React.memo(() => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const name = useAuthStore((state) => state.user?.name || "");
  const updateName = useProfileStore((state) => state.updateName);
  const updatingName = useProfileStore((state) => state.updatingName);

  return (
    <Flex w="full" flexDirection="column" pl={4} pr={4} alignItems="center">
      <Skeleton borderRadius="md" isLoaded={!updatingName}>
        <Text
          wordBreak="break-all"
          whiteSpace="break-spaces"
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
        >
          {name}
        </Text>
      </Skeleton>
      <Button
        mt={{ base: 2, md: 3 }}
        mb={{ base: 0, md: 1 }}
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
