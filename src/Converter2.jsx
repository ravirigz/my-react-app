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
				<label class="label">Distance (Miles):</label><br />
				<input class="input" type="number" id="inputUnit" placeholder="Distance" /><br /><br />
				<label class="label">Convert to:</label><br />
                <select class="input" id="convertUnit">
                    <option value="M">Meters</option>
                    <option value="KM">Kilometers</option>
                </select><br /><br />
				<button class="button" onClick={convertUnit} id="buttonUnit">Convert</button>
				<p id="textUnit"></p>
			</div>
		</>
	)
}

export default Converter2
