import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useShareContactStore } from "stores/useShareContactStore";
import { MyQRCode } from "./MyQRCode";
import { QRCodeScanner } from "./QRCodeScanner";

export const ShareContactModal = React.memo(() => {
  const size = useBreakpointValue({ base: "md", md: "lg" });
  const modalVisible = useShareContactStore((state) => state.modalVisible);
  const closeModal = useShareContactStore((state) => state.closeModal);

  return (
    <Modal isCentered isOpen={modalVisible} onClose={closeModal} size="xs">
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0}>
          <Tabs size={size} isLazy colorScheme="green" isFitted width="full">
            <TabList>
              <Tab borderTopLeftRadius="md" _focus={{}}>
                Share Me
              </Tab>
              <Tab borderTopRightRadius="md" _focus={{}}>
                Scan QR Code
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                d="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                pt={6}
              >
                <MyQRCode />
              </TabPanel>
              <TabPanel>
                <QRCodeScanner />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
