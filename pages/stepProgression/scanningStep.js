import React, { Component } from "react";
import ResultContainerTable from "../../components/scanningResults";
import styles from "../../styles/scanner.module.css";

import { Html5Qrcode } from "html5-qrcode";

class ScanningStep extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// isScanning: true,
			isLoading: false,
			decodedResult: null,
			showScanner: true,
			showResults: false
		};
	}

	componentDidMount() {
		const onScanSuccess = (decodedText, decodedResult) => {
			// this.setState((state) => (state.decodedResult = JSON.parse(decodedText)));
			console.log(decodedText);

			// Need to properly use set state not manipulate the state
			this.setState({
				decodedResult: JSON.parse(decodedText),
				showScanner: false,
				showResults: true
			});

			stopScanner();

			// this.$emit('result:', decodedText, decodedResult)
		};

		const config = {
			fps: 10,
			qrbox: 250
		};

		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					if (!document.getElementById("qr-reader")) return;
					const html5QrCode = new Html5Qrcode("qr-reader");
					this.state.scanner = html5QrCode;
					html5QrCode.start(
						{ facingMode: "environment" },
						config,
						onScanSuccess
					);
				}
			})
			.catch((err) => {
				/* eslint-disable no-console */
				console.log(err);
			});

		const stopScanner = () => {
			this.state.scanner
				.stop()
				.then((ignore) => {
					console.log("Stop function worked");
					// QR Code scanning is stopped.
				})
				.catch((err) => {
					console.log("Stop failed: ", err);
				});
		};
	}

	render() {
		return (
			<>
				<section className="flex flex-col justify-center content-center w-3/6 h-full mx-auto">
					<div>
						<div className={styles.scanner}>
							{this.state.showScanner ? (
								<div>
									<div id="qr-reader" className={styles.scanner} />
								</div>
							) : (
								<ResultContainerTable result={this.state.decodedResult} />
							)}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ScanningStep;
