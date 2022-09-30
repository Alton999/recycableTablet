import React from "react";

const button = ({ text, func }) => {
	return (
		<button class="bg-amber-700 hover:bg-amber-600 text-white py-6 px-8 border-b-4 border-amber-800 hover:border-amber-700 rounded h-42 text-4xl font-normal w-52">
			{text}
		</button>
	);
};

export default button;
