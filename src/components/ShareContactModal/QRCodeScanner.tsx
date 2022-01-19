import React from "react";
import QrReader from "react-qr-reader";
import { useShareContactStore } from "stores/useShareContactStore";

export const QRCodeScanner = React.memo(() => {
  const addFriend = useShareContactStore((state) => state.addFriend);

  return (
    <QrReader
      showViewFinder
      facingMode="environment"
      onError={(err) => {
        alert(err);
      }}
      onScan={(text) => {
        if (text) {
          const [targetId, otpCode] = String(text ?? "").split(";");
          addFriend(Number(targetId), otpCode);
        }
      }}
      style={{ width: "100%" }}
    />
  );
});
