import React from "react";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { useAuthStore } from "stores/useAuthStore";
import { Item } from "./Item";
import { sortBy } from "lodash";
import { FaPen, FaPlus, FaSave } from "react-icons/fa";
import { ContactInfoList } from "components/Contact/ContactInfoList";
import { useProfileStore } from "stores/useProfileStore";

export const UserContactList = React.memo(() => {
  const userContacts = useAuthStore((state) => state.user?.user_contacts ?? []);
  const editMode = useProfileStore((state) => state.editMode);
  const updatingUserContacts = useProfileStore(
    (state) => state.updatingUserContacts
  );
  const updateUserContacts = useProfileStore(
    (state) => state.updateUserContacts
  );
  const setEditMode = useProfileStore((state) => state.setEditMode);
  const [newUserContacts, setNewUserContacts] = React.useState(
    sortBy(userContacts, ["display_order"])
  );

  React.useEffect(() => {
    if (editMode) {
      setNewUserContacts(userContacts);
    }
  }, [editMode, userContacts]);

  if (editMode) {
    return (
      <Flex p={4} flexDirection="column" width="full">
        {newUserContacts.map((item, index) => (
          <Item
            item={item}
            key={index}
            total={newUserContacts.length}
            setItems={setNewUserContacts}
            index={index}
          />
        ))}
        <Flex flexDirection="column" width="full" pt={2} pl={0} pr={0} pb={4}>
          <Button
            disabled={updatingUserContacts}
            mb={3}
            variant="solid"
            width="full"
            leftIcon={<Icon as={FaPlus} />}
            colorScheme="gray"
            onClick={() => {
              setNewUserContacts([
                ...newUserContacts,
                {
                  display_order: newUserContacts.length,
                  contact_type: null as any,
                },
              ]);
            }}
          >
            Add Contact
          </Button>
          <Button
            isLoading={updatingUserContacts}
            variant="ghost"
            width="full"
            leftIcon={<Icon as={FaSave} />}
            colorScheme="green"
            onClick={() => updateUserContacts(newUserContacts)}
          >
            Save Contacts
          </Button>
        </Flex>
      </Flex>
    );
  }
  return (
    <React.Fragment>
      <ContactInfoList items={userContacts} />
      <Flex width="full" mt={-2} pl={4} pr={4} pb={8}>
        <Button
          variant="ghost"
          width="full"
          leftIcon={<Icon as={FaPen} />}
          colorScheme="green"
          onClick={() => setEditMode(true)}
        >
          Edit Contacts
        </Button>
      </Flex>
    </React.Fragment>
  );
});
