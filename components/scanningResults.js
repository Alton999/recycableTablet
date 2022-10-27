import React, { useState, useEffect } from "react";

import QrGenerator from "./qrGenerator";
import styles from "../styles/loader.module.css";

const ResultsCard = ({ result }) => {
	console.log(result);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	// Here I should read the results
	return (
		// This here would be the card component
		<div className="w-5/6 h-90v flex items-center justify-center mx-auto">
			<div className="Result-section flex flex-col items-center justify-center mx-auto border-4 border-amber-700 w-full text-center py-14">
				<h1 className="text-3xl font-bold">Thank you for using</h1>
				<div className="text-4xl mt-4">
					recyc | <span className="font-bold">ABLE</span>
				</div>

				{isLoading ? (
					<>
						<h1 className="mt-14 text-3xl">
							<span className="font-bold">Item: </span>
							{result.item}
						</h1>
						<div className="mt-10">
							<div className={styles.ldsDefault}>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
							</div>
							<h2>
								Please dispose of the {result.material} bottle in the {result.bin} bin.
							</h2>
						</div>
					</>
				) : (
					// This container would be the post disposal message, should include a QR code
					<div className="mt-14">
						<h3 className="text-4xl font-bold text-amber-700">
							Disposal Successful!
						</h3>
						<p className="text-xl my-4 px-4">
							Scan this QR code to add the disposal of {result.item} to your disposal chart.
						</p>
						<QrGenerator result={result}/>

					</div>
				)}
			</div>
		</div>
	);
};

export default ResultsCard;
