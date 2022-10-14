import React from "react";

// const  filterResult = (result) => {
// 	let filteredResult = "";
// 	// for (var i = 0; i < results.length; ++i) {
// 	// 	if (i === 0) {
// 	// 		filteredResults.push(results[i]);
// 	// 		continue;
// 	// 	}
// 	//
// 	// 	if (results[i].decodedText !== results[i - 1].decodedText) {
// 	// 		filteredResults.push(results[i]);
// 	// 	}
// 	// }
// 	// filteredResult += result.decodedText
// 	console.log(result)
// 	return filteredResult;
//
// }

const ResultsCard = ({ result }) => {
	// let filteredResults = filterResults(results);
	// console.log(result);
	// Convert the result from string to javascript object
	// let resultObj = JSON.parse(result);
	// console.log(resultObj);
	console.log(result);
	// Here I should read the results
	return (
		// This here would be the card component
		<div className="w-5/6 h-90v flex items-center justify-center mx-auto">
			<div className="Result-section flex flex-col items-center justify-center mx-auto border-4 border-amber-700 w-full h-96 text-center ">
				<h1 className="text-3xl font-bold">Thank you for using</h1>
				<div className="text-5xl">
					recyc | <span className="font-bold">ABLE</span>
				</div>
				<h1 className="mt-14 text-4xl">
					<span className="font-bold">Item: </span>
					{result.item}
				</h1>
				parse
			</div>
		</div>
	);
};

export default ResultsCard;
