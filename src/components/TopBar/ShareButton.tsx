import { Icon, IconButton } from "@chakra-ui/react";
import { ShareContactModal } from "components/ShareContactModal";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useShareContactStore } from "stores/useShareContactStore";

export const ShareButton = React.memo(() => {
  const { pathname } = useLocation();
  const openModal = useShareContactStore((state) => state.openModal);

  if (!pathname.startsWith("/profile")) {
    return null;
  }

  return (
    <React.Fragment>
      <IconButton
        aria-label="back"
        position="fixed"
        variant="outline"
        borderWidth={2}
        right={2}
        icon={<Icon as={FaQrcode} />}
        onClick={openModal}
      />
      <ShareContactModal />
    </React.Fragment>
  );
});
