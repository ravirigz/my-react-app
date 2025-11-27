import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Converter.css'
import './Converter.js'

function Converter2() {
	return (
		<>
			<div class="converter">
				<h2>Unit Converter</h2>
				<label>Distance (MI):</label><br />
				<input class="input" type="number" id="inputUnit" placeholder="Distance" /><br /><br />
				<label>Convert to:</label><br />
				<input class="input" type="text" id="convertUnit" placeholder="M/MI/KM" /><br /><br />
				<button class="button" onClick={convertUnit} id="buttonUnit">Convert</button>
				<p id="textUnit"></p>
			</div>
		</>
	)
}

export default Converter2
