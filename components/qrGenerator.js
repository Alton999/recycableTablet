import React, { useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";


const QrGenerator = ({result}) => {
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={result}
      size={300}
      bgColor={"white"}
      level={"H"}
    />
  );

  return (
    <div className="flex justify-center">
      {qrcode}
    </div>
  );
};

export default QrGenerator;
