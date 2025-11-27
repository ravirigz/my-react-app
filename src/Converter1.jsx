import { useState } from 'react'
import './Converter.css'
import './Converter.js'

function Converter1() {
    return (
        <>
            <div class="converter">
                <h2>💵 Currency Converter</h2>
                <label class="label">Amount (USD):</label><br />
                <input class="input" type="number" id="inputAmount" placeholder="Amount" /><br /><br />
                <label class="label">Convert to:</label><br />
                <select class="input" id="convertTo">
                    <option value="EUR">Euro</option>
                    <option value="PHP">Philippine Peso</option>
                </select><br /><br />
                <button class="button" onClick={convertCurrency} id="buttonCurrency">Convert</button>
                <p id="textCurrency"></p>
            </div>
        </>
    )
}

export default Converter1
