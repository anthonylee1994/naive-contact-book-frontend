import React from "react";
import QrReader from "react-qr-scanner";
import { useShareContactStore } from "stores/useShareContactStore";

export const QRCodeScanner = React.memo(() => {
  const addFriend = useShareContactStore((state) => state.addFriend);

  return (
    <QrReader
      delay={300}
      onError={(err: any) => {
        alert(err);
      }}
      onScan={(data: any) => {
        if (data) {
          const [targetId, otpCode] = String(data ?? "").split(";");
          addFriend(Number(targetId), otpCode);
        }
      }}
      style={{ width: "100%" }}
    />
  );
});
