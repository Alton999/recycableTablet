import React, { useState, useEffect, Component } from "react";
import Scanner from "../../components/scanner";
import ResultContainerTable from "../../components/scanningResults";

class ScanningStep extends Component {
	// const [torchOn, setTorchOn] = useState(false);
	constructor(props) {
		super(props);
		this.state = {
			decodedResults: []
		}

		// This binding is necessary to make `this` work in the callback.
		this.onNewScanResult = this.onNewScanResult.bind(this);
	}

	render() {
		return (
			<div className="w-3/6 h-24">
					<Scanner
						fps={10}
						qrbox={250}
						disableFlip={false}
						qrCodeSuccessCallback={this.onNewScanResult}/>
					<ResultContainerTable results={this.state.decodedResults} />
					<h1>Hello world</h1>
			</div>
		);
	}

	onNewScanResult(decodedText, decodedResult) {
		console.log(
			"App [result]", decodedResult);

		// let decodedResults = this.state.decodedResults;
		// decodedResults.push(decodedResult);
		this.setState((state, props) => {
			state.decodedResults.push(decodedResult);
			return state;
		});
	}
}

export default ScanningStep;
