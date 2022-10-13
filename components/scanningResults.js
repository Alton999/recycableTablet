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

const ResultsCard = ({result}) => {
		// let filteredResults = filterResults(results);
		return (
			// This here would be the card component
			<div className="w-4/6 h-90v flex items-center justify-center mx-auto">
				<div className="Result-section border-2 border-sky-500 w-96 h-64">
					<p>{result}</p>
				</div>
			</div>
		);

}

export default ResultsCard;
