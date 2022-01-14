import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
  },
}) as ChakraTheme;
