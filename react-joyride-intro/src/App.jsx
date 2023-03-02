import React, {useState} from "react";
import Joyride from 'react-joyride';

import './App.css'

const App = () => {
	const [run, setRun] = useState(false);
	const [steps, setState] = useState([
		{
			target: ".my-first-step",
			content: "First step"
		},
		{
			target: ".my-second-step",
			content: "Second step"
		},
		{
			target: ".my-third-step",
			content: "Third step"
		}
	]);

	const handleClickStart = (event) => {
		event.preventDefault();
		setRun(true);
	};

	const handleJoyrideCallback = (data) => {
		const { status, type } = data;
		const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
		if (finishedStatuses.includes(status)) {
			setRun(false);
		}
	  };

	return (
		<div className="App">
			<Joyride
        		callback={handleJoyrideCallback}
        		continuous
        		hideCloseButton
        		run={run}
        		scrollToFirstStep
        		showProgress
        		showSkipButton
        		steps={steps}
        		styles={{
          			options: {
            			zIndex: 10000,
          			},
        		}}
      		/>
			<div className="my-steps">
				<div className="my-first-step">FIRST<br />b_l_o_c_k</div>
				<div className="my-second-step">SECOND<br />b_l_o_c_k</div>
				<div className="my-third-step">THIRD<br />b_l_o_c_k</div>
			</div>
			<div className="my-start-click-button-container">
				<button className="my-start-button" onClick={handleClickStart}>Let start the show...</button>
			</div>
		</div>
	)
}

export default App
