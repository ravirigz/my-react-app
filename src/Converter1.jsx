import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Converter.css'
import './Converter.js'

function Converter1() {
    return (
        <>
            <div class="converter">
                <h2>Currency Converter</h2>
                <label>Amount (USD):</label><br />
                <input class="input" type="number" id="inputAmount" placeholder="Amount" /><br /><br />
                <label>Convert to:</label><br />
                <select id="fruits" name="favorite_fruit">
                    <option value="">--Please choose an option--</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="grape">Grape</option>
                </select>
                <input class="input" type="text" id="convertTo" placeholder="EUR/PHP" /><br /><br />
                <button class="button" onClick={convertCurrency} id="buttonCurrency">Convert</button>
                <p id="textCurrency"></p>
            </div>
        </>
    )
}

export default Converter1
