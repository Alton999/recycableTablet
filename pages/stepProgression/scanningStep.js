import React, { useState, useEffect, Component } from "react";
import Scanner from "../../components/scanner";
import ResultContainerTable from "../../components/scanningResults";

class ScanningStep extends Component {
	// const [torchOn, setTorchOn] = useState(false);
	constructor(props) {
		super(props);
		this.state = {
			decodedResults: []
		};
		this.onNewScanResult = this.onNewScanResult.bind(this);
	}
	render() {
		return (
			<>
				<Scanner
					fps={10}
					qrbox={250}
					aspectRatio={"16:10"}
					disableFlip={false}
					qrCodeSuccessCallback={this.onNewScanResult}
				/>

				<ResultContainerTable results={this.state.decodedResults} />
			</>
		);
	}
	onNewScanResult(decodedText, decodedResult) {
		// Handle the result here
		console.log("App result: ", decodedResult);
		this.setState((state, props) => {
			state.decodedResults.push(decodedResult);
			return state;
		});
	}
}

export default ScanningStep;
