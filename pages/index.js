import React, { useState } from "react";

import Head from "next/head";
import Button from "../components/button";

// Importing of step components
import Step1 from "./stepProgression/introductionStep";
import Step2 from "./stepProgression/scanningStep";

const Home = () => {
	const [step, setStep] = useState(1);
	const navForward = () => {
		setStep(step + 1);
		console.log(step);
	};

	const navBack = () => {
		setStep(step - 1);
		console.log(step);
	};

	return (
		<div>
			<Head>
				<title>Recyclable Tablet Mode</title>
				<meta
					name="description"
					content="Tablet mode for the recyclable concept"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* This would be the first welcome page */}

				{/* Should have conditional steps here depending on step number */}
				{step === 1 && <Step1 navForward={navForward} navBack={navBack} />}
				{step === 2 && <Step2 navForward={navForward} navBack={navBack} />}
				{/* Step 1 */}
		</div>
	);
};

export default Home;
