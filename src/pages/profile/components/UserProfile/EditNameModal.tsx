import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newName: string) => void;
  name: string;
}

export const EditNameModal = React.memo<Props>(
  ({ name, isOpen, onClose, onSave }) => {
    const [newName, setNewName] = React.useState(name);

    React.useEffect(() => {
      if (isOpen) {
        setNewName(name);
      }
    }, [isOpen, setNewName, name]);

    return (
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave(newName);
            }}
          >
            <ModalHeader>Edit Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                autoFocus
                variant="filled"
                _focus={{ borderColor: "green.200" }}
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                disabled={isEmpty(newName)}
                colorScheme="green"
                variant="solid"
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  }
);
