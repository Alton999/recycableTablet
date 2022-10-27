import React from "react";
import Button from "../../components/button";
import styles from "../../styles/loader.module.css";

const introductionStep = ({ navForward }) => {
	return (
		<section className="flex w-4/6 mx-auto items-center h-90v justify-between">
			{/* Left intro section */}
			<section className="w-1/2">
				<h1 className="text-5xl leading-loose">
					Welcome to the
					<div className="text-5xl">
						recyc | <span className="font-bold">ABLE</span>
					</div>
					concept bin.
				</h1>
			</section>
			{/* Right section */}
			<section className="flex justify-end w-1/4">
				<Button text="Start Disposing" func={navForward} />
			</section>


    </section>
	);
};

export default introductionStep;
