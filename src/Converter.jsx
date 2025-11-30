import { useState } from 'react'
import './Converter.css'
import './Converter.js'

function Converter() {
    return (
        <>
            <div class="main-container">
                <div class="column-container">
                    <div class="converter">
                        <h2>💵 Currency Converter</h2>
                        <label class="label">Amount:</label><br />
                        <div class="select-dropdown">
                            <input class="input" type="number" id="inputAmount" placeholder="Amount" /><br /><br />
                            <select class="select-dropdown-from" id="convertFrom">
                            <option value="USD">United States Dollar</option>
                            <option value="EUR">Euro</option>
                            <option value="PHP">Philippine Peso</option>
                        </select><br /><br />
                        </div>
                        <label class="label">Convert to:</label><br />
                        <select class="dropdown" id="convertTo">
                            <option value="USD">United States Dollar</option>
                            <option value="EUR">Euro</option>
                            <option value="PHP">Philippine Peso</option>
                        </select><br /><br />
                        <button class="button" onClick={convertCurrency} id="buttonCurrency">Convert</button>
                        <p class="textDOM" id="textCurrency"></p>
                    </div>

                    <div class="converter">
                        <h2>🛣️ Distance Converter</h2>
                        <label class="label">Distance (Miles):</label><br />
                        <input class="input" type="number" id="inputUnit" placeholder="Distance" /><br /><br />
                        <label class="label">Convert to:</label><br />
                        <select class="dropdown" id="convertUnit">
                            <option value="M">Meters</option>
                            <option value="KM">Kilometers</option>
                        </select><br /><br />
                        <button class="button" onClick={convertUnit} id="buttonUnit">Convert</button>
                        <p class="textDOM" id="textUnit"></p>
                    </div>
                </div>

                <div class="column-container">
                    <div class="converter">
                        <h2>🌡️ Temperature Converter</h2>
                        <label class="label">Amount (USD):</label><br />
                        <input class="input" type="number" id="inputAmount" placeholder="Amount" /><br /><br />
                        <label class="label">Convert to:</label><br />
                        <select class="dropdown" id="convertTo">
                            <option value="EUR">Euro</option>
                            <option value="PHP">Philippine Peso</option>
                        </select><br /><br />
                        <button class="button" onClick={convertCurrency} id="buttonTemperature">Convert</button>
                        <p class="textDOM" id="textCurrency"></p>
                    </div>

                    <div class="converter">
                        <h2>⏰ Time Converter</h2>
                        <label class="label">Distance (Miles):</label><br />
                        <input class="input" type="number" id="inputUnit" placeholder="Distance" /><br /><br />
                        <label class="label">Convert to:</label><br />
                        <select class="dropdown" id="convertUnit">
                            <option value="M">Meters</option>
                            <option value="KM">Kilometers</option>
                        </select><br /><br />
                        <button class="button" onClick={convertUnit} id="buttonTime">Convert</button>
                        <p class="textDOM" id="textUnit"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Converter
