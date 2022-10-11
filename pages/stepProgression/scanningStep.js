import React, { useState, useEffect, Component } from "react";
import Scanner from "../../components/scanner";
import ResultContainerTable from "../../components/scanningResults";
import styles from "../../styles/scanner.module.css"

class ScanningStep extends Component {
	// const [isScanning, setIsScanning] = useState(false);
	// const [torchOn, setTorchOn] = useState(false);

	constructor(props) {
		super(props);
		this.state = {
			isScanning: true,
			isLoading: false,
			decodedResult: null
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
							{this.state.isScanning ? <Scanner
								fps={10}
								qrbox={250}
								disableFlip={false}
								qrCodeSuccessCallback={this.onNewScanResult}/> : null}

						</div>
					</div>
				</section>
				{this.state.decodedResult}
				<ResultContainerTable result={this.state.decodedResult} />
			</>
		);
	}

	onNewScanResult(decodedText, decodedResult) {
		console.log(
			"App [result]", decodedResult);
		this.setState((state, props) => {
			state.decodedResult = decodedText;

			return state;
		});
		this.setState((state, props) => state.isScanning = false);
	}
}

export default ScanningStep;
