import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

export const AddTagModal = React.memo<Props>(({ isOpen, onClose, onSave }) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (!isOpen) {
      setName("");
    }
  }, [isOpen, setName]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(name);
            onClose();
          }}
        >
          <ModalHeader>Add Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              autoFocus
              variant="filled"
              _focus={{ borderColor: "green.200" }}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              disabled={isEmpty(name)}
              colorScheme="green"
              variant="solid"
            >
              Add
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
