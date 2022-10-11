import React, { useState, useEffect, Component } from "react";
import Scanner from "../../components/scanner";
import ResultContainerTable from "../../components/scanningResults";
import styles from "../../styles/scanner.module.css"

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
			<>
				<section className="flex flex-col justify-center content-center w-3/6 h-full mx-auto">
					<div>
						<div className={styles.scanner}>
							<Scanner
								fps={10}
								qrbox={{width: 300, height: 150}}
								disableFlip={false}
								qrCodeSuccessCallback={this.onNewScanResult}/>
						</div>
					</div>
				</section>
				<ResultContainerTable className="mt-12" results={this.state.decodedResults} />
			</>
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
