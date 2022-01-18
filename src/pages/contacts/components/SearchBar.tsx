import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import { useFriendListStore } from "stores/useFriendListStore";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = React.memo(() => {
  const isFetching = useFriendListStore((state) => state.fetching);
  const filterType = useFriendListStore((state) => state.filter.by);
  const fetchFriends = useFriendListStore((state) => state.fetch);
  const toggleFilterType = useFriendListStore(
    (state) => state.toggleFilterType
  );
  const keyword = useFriendListStore((state) => state.filter.keyword);
  const setKeyword = useFriendListStore((state) => state.setKeyword);

  const onSearch = useDebouncedCallback((value) => {
    fetchFriends();
  }, 100);

  return (
    <Flex
      bgColor="gray.600"
      width="full"
      position="fixed"
      p={2}
      boxShadow="0 0 10px 0 rgba(0,0,0,0.5)"
    >
      <InputGroup size="md">
        <InputLeftElement width="3rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={toggleFilterType}
            colorScheme={filterType === "tag" ? "green" : "gray"}
            fontWeight={filterType === "tag" ? "bold" : "normal"}
          >
            #
          </Button>
        </InputLeftElement>
        <Input
          pl="3rem"
          value={keyword}
          onChange={({ target: { value } }) => {
            setKeyword(value);
            onSearch(value);
          }}
          _focus={{ borderColor: "green.200", bgColor: "gray.700" }}
          variant="filled"
          placeholder="Search"
          bgColor="gray.700"
        />
      </InputGroup>
      {isFetching && (
        <Progress
          left={0}
          height={1}
          zIndex={2}
          isIndeterminate
          w="full"
          top="56px"
          position="absolute"
          colorScheme="green"
        />
      )}
    </Flex>
  );
});
