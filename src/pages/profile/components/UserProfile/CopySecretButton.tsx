import React from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useAuthStore } from "stores/useAuthStore";
import { FaCopy } from "react-icons/fa";

export const CopySecretButton = React.memo(() => {
  const secret = useAuthStore((state) => state.user?.secret);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onCopy = React.useCallback(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
    try {
      if (secret) {
        navigator.clipboard.writeText(secret).then(() => {
          alert("Copied to clipboard");
        });
      }
    } catch (err) {}
  }, [secret]);

  return (
    <Flex flexDirection="column" width="full" p={4}>
      <FormControl>
        <FormLabel>Sign-In Secret</FormLabel>
        <InputGroup>
          <Input
            ref={inputRef}
            readOnly
            _focus={{ borderColor: "green.300" }}
            variant="outline"
            value={secret}
          />
          <InputRightElement>
            <IconButton
              onClick={onCopy}
              borderStartRadius={0}
              variant="solid"
              aria-label="Copy"
              icon={<Icon as={FaCopy} />}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
});
