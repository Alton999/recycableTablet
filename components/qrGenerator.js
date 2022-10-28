import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrGenerator = ({ result }) => {
	console.log(result);
	const qrcode = (
		<QRCodeCanvas
			id="qrCode"
			value={JSON.stringify(result)}
			size={300}
			bgColor={"white"}
			level={"H"}
		/>
	);

	return <div className="flex justify-center">{qrcode}</div>;
};

export default QrGenerator;
