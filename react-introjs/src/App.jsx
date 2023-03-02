import React from "react";
import * as introJs from "intro.js/intro";

import './App.css'

const App = () => {
	const handleClickStart = (event) => {
		event.preventDefault();
		introJs().start()
	}
	return (
		<div className="App">
			<div
				className="my-steps"
				data-title="Main block"
				data-intro="This is the main block."
			>
				<div
					className="my-first-step"
					data-title="FIRST block"
					data-intro="This is the first block."
				>
					FIRST<br />b_l_o_c_k
				</div>
				<div
					className="my-second-step"
					data-title="SECOND block"
					data-intro="This is the second block."
				>
					SECOND<br />b_l_o_c_k
				</div>
				<div
					className="my-third-step"
					data-title="THIRD block"
					data-intro="This is the third block."
				>
					THIRD<br />b_l_o_c_k
				</div>
			</div>
			<div className="my-start-click-button-container">
				<button
					className="my-start-button"
					onClick={handleClickStart}
					data-title="Last block"
					data-intro="This is the last block of the show."
				>Let start the show...</button>
			</div>
		</div>
	)
}

export default App
