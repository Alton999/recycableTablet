import React, { useState, useEffect, Component } from "react";
import Scanner from "../../components/scanner";
import ResultContainerTable from "../../components/scanningResults";
import styles from "../../styles/scanner.module.css";

import { Html5Qrcode } from 'html5-qrcode';
import {useIntersection} from "next/dist/client/use-intersection";

// const ScanningStep = () => {
//   const [showResult, setShowResult] = useState(false);
//   const [showScanner, setShowScanner] = useState(true);
//   const [decodedResult, setDecodedResult] = useState({});
//   const [scanner, setScanner] = useState(null);
//
//   useEffect(()=> {
//
//     const onScanSuccess = (decodedText, decodedResult) => {
//       setDecodedResult(JSON.parse(decodedText));
//       console.log(decodedText);
//       setShowResult(true);
//       setShowScanner(false);
//       stopScanner()
//       // this.$emit('result:', decodedText, decodedResult)
//     }
//
//     const config = {
//       fps: 10,
//       qrbox: 250,
//     }
//
//     Html5Qrcode.getCameras()
//       .then((devices) => {
//         if (devices && devices.length) {
//           if (!document.getElementById('qr-reader')) return
//           const html5QrCode = new Html5Qrcode('qr-reader')
//           this.state.scanner = html5QrCode
//           html5QrCode
//             .start({ facingMode: 'environment' }, config, onScanSuccess)
//         }
//       })
//       .catch((err) => {
//         /* eslint-disable no-console */
//         console.log(err)
//       })
//
//     const stopScanner = () => {
//       this.state.scanner.stop().then((ignore) => {
//         // QR Code scanning is stopped.
//       }).catch((err) => {
//         console.log('Stop failed: ', err)
//       })
//     }
//   }, [])
//
//   return (
//     <>
//       <div className="h-80 flex justify-center align-center">
//         <div className="w-1/2">
//           { showScanner ? <div id="qr-reader" className={styles.scanner}/>: null}
//           {/*{}*/}
//
//         </div>
//       </div>
//     </>
//   )
//
// }

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

		// This binding is necessary to make `this` work in the callback.
		// this.onNewScanResult = this.onNewScanResult.bind(this);
	}

  // onNewScanResult(decodedText, decodedResult) {
  //   // console.log("App [result]", decodedResult);
  //   this.setState((state, props) => (state.isScanning = false));
  //   this.setState((state, props) => {
  //     // const resultObj = ;
  //     state.decodedResult = JSON.parse(decodedText);
  //     return state;
  //   });
  // }


  componentDidMount() {
		const onScanSuccess = (decodedText, decodedResult) => {
      this.setState((state) => state.decodedResult = JSON.parse(decodedText));
      console.log(decodedText);
			this.state.showScanner = false;
			this.state.showResults = true;

			stopScanner();

      // this.$emit('result:', decodedText, decodedResult)
    }

    const config = {
      fps: 10,
      qrbox: 250,
    }

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          if (!document.getElementById('qr-reader')) return
          const html5QrCode = new Html5Qrcode('qr-reader')
          this.state.scanner = html5QrCode
          html5QrCode
            .start({ facingMode: 'environment' }, config, onScanSuccess)
        }
      })
      .catch((err) => {
        /* eslint-disable no-console */
        console.log(err)
      })

    const stopScanner = () => {
      this.state.scanner.stop().then((ignore) => {
				console.log("Stop function worked")
        // QR Code scanning is stopped.
      }).catch((err) => {
        console.log('Stop failed: ', err)
      })
    }
  }

  render() {
		return (
			<>
				<section className="flex flex-col justify-center content-center w-3/6 h-full mx-auto">
					<div>
						<div className={styles.scanner}>
							{this.state.showScanner ? (
								<div>
									<div id="qr-reader" className={styles.scanner}/>
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
