import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FaAddressCard } from "react-icons/fa";
import { InlineResponse200 } from "api";
import VCard from "vcard-creator";

interface Props extends ButtonProps {
  friendship?: InlineResponse200 | null;
}

export const ExportButton = React.memo<Props>(
  ({ friendship, ...otherProps }) => {
    const onExport = () => {
      let vCard = new VCard();
      vCard = vCard.addName(undefined, friendship?.target?.name ?? "");

      vCard = vCard.addCategories(
        (friendship?.tags ?? [])
          .map(({ value }) => value)
          .filter(Boolean) as string[]
      );

      if (friendship?.target?.avatar_url) {
        vCard = vCard.addLogo(friendship?.target?.avatar_url);
      }

      const whatsapps =
        friendship?.target?.user_contacts?.filter(
          (x) => x.contact_type === "WhatsAppContact"
        ) ?? [];

      whatsapps.forEach((whatsapp) => {
        if (whatsapp && whatsapp.contact?.phone_number) {
          vCard = vCard.addPhoneNumber(whatsapp.contact.phone_number);
          vCard = vCard.addURL(
            `https://wa.me/${whatsapp.contact?.phone_number}`,
            "WhatsApp"
          );
        }
      });

      const addresses =
        friendship?.target?.user_contacts?.filter(
          (x) => x.contact_type === "AddressContact"
        ) ?? [];

      addresses.forEach((address) => {
        if (address && address.contact?.address) {
          vCard = vCard.addAddress(
            undefined,
            undefined,
            address.contact.address
          );
        }
      });

      const telegrams = friendship?.target?.user_contacts?.filter(
        (x) => x.contact_type === "TelegramContact"
      );

      telegrams?.forEach((telegram) => {
        if (telegram && telegram.contact?.username) {
          vCard = vCard.addURL(
            `https://t.me/${telegram.contact?.username}`,
            "Telegram"
          );
        }
      });

      const data = new Blob([vCard.toString()], { type: "text/vcard" });
      const vcardURL = window.URL.createObjectURL(data);
      const tempLink = document.createElement("a");
      tempLink.href = vcardURL;
      tempLink.setAttribute(
        "download",
        `${friendship?.target?.name ?? "contact"}.vcf`
      );
      tempLink.click();
    };

    return (
      <Button
        leftIcon={<Icon as={FaAddressCard} />}
        width="full"
        bgColor="green.500"
        _active={{ bgColor: "green.700" }}
        _hover={{ bgColor: "green.500" }}
        onClick={onExport}
        {...otherProps}
      >
        Export Contact as VCard
      </Button>
    );
  }
);
