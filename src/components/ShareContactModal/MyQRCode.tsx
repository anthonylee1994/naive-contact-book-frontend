import React from "react";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { useShareContactStore } from "stores/useShareContactStore";

export const MyQRCode = React.memo(() => {
  const getQRCodeValue = useShareContactStore((state) => state.getQRCodeValue);
  const refetchQRCode = useShareContactStore((state) => state.refetchQRCode);
  const fetched = useShareContactStore((state) => state.fetched);
  const qrCodeValue = getQRCodeValue();

  React.useEffect(() => {
    refetchQRCode();
    const timer = window.setInterval(() => {
      refetchQRCode();
    }, 10000);
    return () => {
      window.clearInterval(timer);
    };
  }, [refetchQRCode]);

  return (
    <Flex
      flexDirection="column"
      width="full"
      alignItems="center"
      justifyContent="center"
    >
      <Skeleton isLoaded={!!qrCodeValue && fetched}>
        <Box bgColor="white" p={2} borderRadius="md">
          <QRCode size={128} value={qrCodeValue ?? ""} />
        </Box>
      </Skeleton>
      <Text mt={4} mb={1}>
        Ask your friend to scan
      </Text>
    </Flex>
  );
});
