import { useState } from 'react'
import './Converter.css'
import { convertCurrency, convertUnit, convertTemp, convertTime } from './Converter.js'

function Converter() {
    return (
        <>
            <div class="main-container">
                <div class="column-container">
                    <div class="converter">
                        <h2>💵 Currency Converter</h2>
                        <label class="label">Amount:</label>
                        <div class="select-dropdown">
                            <input class="input" type="number" id="inputAmount" placeholder="Amount" />
                            <select class="select-dropdown-from" id="convertFromCurrency">
                            <option value="USD">United States Dollar</option>
                            <option value="EUR">Euro</option>
                            <option value="PHP">Philippine Peso</option>
                        </select>
                        </div>
                        <label class="label">Convert to:</label>
                        <select class="dropdown" id="convertTo">
                            <option value="USD">United States Dollar</option>
                            <option value="EUR">Euro</option>
                            <option value="PHP">Philippine Peso</option>
                        </select>
                        <button class="button" onClick={convertCurrency} id="buttonCurrency">Convert</button>
                        <p class="textDOM" id="textCurrency"></p>
                    </div>

                    <div class="converter">
                        <h2>🛣️ Distance Converter</h2>
                        <label class="label">Amount:</label>
                        <div class="select-dropdown">
                            <input class="input" type="number" id="inputUnit" placeholder="Distance" />
                            <select class="select-dropdown-from" id="convertFromDistance">
                            <option value="MI">Miles</option>   
                            <option value="M">Meters</option>
                            <option value="KM">Kilometers</option>
                        </select>
                        </div>
                        <label class="label">Convert to:</label>
                        <select class="dropdown" id="convertUnit">
                            <option value="MI">Miles</option>   
                            <option value="M">Meters</option>
                            <option value="KM">Kilometers</option>
                        </select>
                        <button class="button" onClick={convertUnit} id="buttonUnit">Convert</button>
                        <p class="textDOM" id="textUnit"></p>
                    </div>
                </div>

                <div class="column-container">
                    <div class="converter">
                        <h2>🌡️ Temperature Converter</h2>
                        <label class="label">Amount:</label>
                        <div class="select-dropdown">
                            <input class="input" type="number" id="inputTemp" placeholder="Temperature" />
                            <select class="select-dropdown-from" id="convertFromTemp">
                            <option value="C">Celsius</option>
                            <option value="F">Fahrenheit</option>
                            <option value="K">Kelvin</option>
                        </select>
                        </div>
                        <label class="label">Convert to:</label>
                        <select class="dropdown" id="convertToTemp">
                            <option value="C">Celsius</option>
                            <option value="F">Fahrenheit</option>
                            <option value="K">Kelvin</option>
                        </select>
                        <button class="button" onClick={convertTemp} id="buttonTemp">Convert</button>
                        <p class="textDOM" id="textTemp"></p>
                    </div>

                    <div class="converter">
                        <h2>⏰ Time Converter</h2>
                        <label class="label">Amount:</label>
                        <div class="select-dropdown">
                            <input class="input" type="number" id="inputTime" placeholder="Duration" />
                            <select class="select-dropdown-from" id="convertFromTime">
                                <option value="H">Hours</option>
                                <option value="M">Minutes</option>
                                <option value="S">Seconds</option>
                            </select>
                        </div>
                        <label class="label">Convert to:</label>
                        <select class="dropdown" id="convertToTime">
                            <option value="H">Hours</option>
                            <option value="M">Minutes</option>
                            <option value="S">Seconds</option>
                        </select>
                        <button class="button" onClick={convertTime} id="buttonTime">Convert</button>
                        <p class="textDOM" id="textTime"></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Converter
