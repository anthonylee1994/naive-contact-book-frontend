import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { FaKey } from "react-icons/fa";
import { useAuthStore } from "stores/useAuthStore";
import { useSignInFormStore } from "pages/sign-in/stores/useSignInFormStore";

export const SignInForm = React.memo(() => {
  const privateKey = useSignInFormStore((state) => state.privateKey);
  const setPrivateKey = useSignInFormStore((state) => state.setPrivateKey);
  const onSubmit = useSignInFormStore((state) => state.onSubmit);
  const isSigning = useAuthStore((state) => state.isSigning);
  const isSignInError = useAuthStore((state) => state.isSignInError);

  // 2f634967ee572fb7561e0ecf47c054e0

  return (
    <Flex flexDirection="column">
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={isSignInError}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaKey} color="gray.400" />}
            />
            <Input
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              type="password"
              placeholder="Your Private Key"
              bgColor="gray.600"
              variant="filled"
              _focus={{ borderColor: "green.200" }}
            />
          </InputGroup>
          <FormErrorMessage>Invalid Private Key</FormErrorMessage>
        </FormControl>
        <Button
          width="full"
          type="submit"
          isLoading={isSigning}
          disabled={isEmpty(privateKey)}
          colorScheme="green"
          mt={3}
        >
          Sign In
        </Button>
      </form>
    </Flex>
  );
});
