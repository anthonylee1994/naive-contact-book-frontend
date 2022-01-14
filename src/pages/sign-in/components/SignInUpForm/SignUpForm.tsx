import React from "react";
import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useSignUpFormStore } from "../../stores/useSignUpFormStore";
import { isEmpty } from "lodash";
import { useAuthStore } from "../../../../stores/useAuthStore";

export const SignUpForm = React.memo(() => {
  const name = useSignUpFormStore((state) => state.name);
  const setName = useSignUpFormStore((state) => state.setName);
  const onSubmit = useSignUpFormStore((state) => state.onSubmit);
  const isSigning = useAuthStore((state) => state.isSigning);

  return (
    <Flex flexDirection="column">
      <form onSubmit={onSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaUser} color="gray.400" />}
          />
          <Input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            bgColor="gray.600"
            variant="filled"
            _focus={{ borderColor: "green.200" }}
          />
        </InputGroup>
        <Button
          width="full"
          type="submit"
          isLoading={isSigning}
          disabled={isEmpty(name)}
          colorScheme="green"
          mt={3}
        >
          Sign Up
        </Button>
      </form>
    </Flex>
  );
});
