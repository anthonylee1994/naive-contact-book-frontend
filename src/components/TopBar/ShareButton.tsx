import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ShareContactModal } from "components/ShareContactModal";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useShareContactStore } from "stores/useShareContactStore";

export const ShareButton = React.memo(() => {
  const { pathname } = useLocation();
  const size = useBreakpointValue({ base: "md", md: "lg" });
  const openModal = useShareContactStore((state) => state.openModal);

  if (/\/contacts\/\d+\/?$/.test(pathname)) {
    return null;
  }

  return (
    <React.Fragment>
      <IconButton
        size={size}
        aria-label="back"
        position="fixed"
        variant="outline"
        borderWidth={2}
        right={{ base: 2, md: 4 }}
        icon={<Icon as={FaQrcode} />}
        onClick={openModal}
      />
      <ShareContactModal />
    </React.Fragment>
  );
});
