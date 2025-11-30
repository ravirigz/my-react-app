export function convertCurrency() {
    let isNull = document.getElementById("inputAmount").value.trim();
    let currencyFrom = document.getElementById("convertFromCurrency").value;
    let currencyRequest = document.getElementById("convertTo").value;
    let currencyText = document.getElementById("textCurrency");

    if (isNull === ""){
        currencyText.textContent = "Enter a valid number.";
        return;
    }

    let currencyInput = parseInt(isNull);

    if (currencyInput <= 0) {
        currencyText.textContent = "Enter a positive number.";
        return;
    } 
    if (currencyFrom === "USD") {
        if (currencyRequest === "EUR") {
            let result = currencyInput * 0.8635;
            currencyText.textContent = "€" + result.toFixed(2);
        } else if (currencyRequest === "PHP") {
            let result = currencyInput * 58.64;
            currencyText.textContent = "₱" + result.toFixed(2);
        } else if (currencyRequest === "USD") {
            let result = currencyInput;
            currencyText.textContent = "$" + result.toFixed(2);
        } else {
            currencyText.textContent = "Invalid input.";
        }
    } else if (currencyFrom === "EUR") {
        if (currencyRequest === "USD") {
            let result = currencyInput * 1.158;
            currencyText.textContent = "$" + result.toFixed(2);
        } else if (currencyRequest === "PHP") {
            let result = currencyInput * 67.82;
            currencyText.textContent = "₱" + result.toFixed(2);
        } else if (currencyRequest === "EUR") {
            let result = currencyInput;
            currencyText.textContent = "€" + result.toFixed(2);
        } else {
            currencyText.textContent = "Invalid input.";
        }

    } else if (currencyFrom === "PHP") {
        if (currencyRequest === "USD") {
            let result = currencyInput * 0.0170;
            currencyText.textContent = "$" + result.toFixed(2);
        } else if (currencyRequest === "EUR") {
            let result = currencyInput * 0.0147;
            currencyText.textContent = "€" + result.toFixed(2);
        } else if (currencyRequest === "PHP") {
            let result = currencyInput;
            currencyText.textContent = "₱" + result.toFixed(2); 
        } else {
            currencyText.textContent = "Invalid input.";
        }

    } else {
        currencyText.textContent = "Invalid input.";
    }
}


export function convertUnit() {
    let isNull = document.getElementById("inputUnit").value.trim();
    let unitFrom = document.getElementById("convertFromDistance").value;
    let unitRequest = document.getElementById("convertUnit").value;
    let unitText = document.getElementById("textUnit");

    if (isNull === ""){
        unitText.textContent = "Enter a valid number.";
        return;
    }

    let unitInput = parseInt(isNull);

    if (unitInput <= 0) {
        unitText.textContent = "Enter a positive number.";
        return;
    } 

    if (unitFrom === "MI") {
        if (unitRequest === "KM") {
            let result = unitInput * 1.609344;
            unitText.textContent = result.toFixed(2) + " KM";
        } else if (unitRequest === "M") {
            let result = unitInput * 1609.344;
            unitText.textContent = result.toFixed(2) + " M";
        } else if (unitRequest === "MI") {
            let result = unitInput;
            unitText.textContent = result.toFixed(2) + " MI";
        } else {
            unitText.textContent = "Invalid input.";
        }
    } else if (unitFrom === "KM") {
        if (unitRequest === "MI") {
            let result = unitInput * 0.621371;
            unitText.textContent = result.toFixed(2) + " MI";
        } else if (unitRequest === "M") {
            let result = unitInput * 1000;
            unitText.textContent = result.toFixed(2) + " M";
        } else if (unitRequest === "KM") {
            let result = unitInput;
            unitText.textContent = result.toFixed(2) + " KM";
        } else {
            unitText.textContent = "Invalid input.";
        }
    } else if (unitFrom === "M") {
        if (unitRequest === "MI") {
            let result = unitInput * 0.000621371;
            unitText.textContent = result.toFixed(4) + " MI";
        } else if (unitRequest === "KM") {
            let result = unitInput * 0.001;
            unitText.textContent = result.toFixed(3) + " KM";
        } else if (unitRequest === "M") {
            let result = unitInput;
            unitText.textContent = result.toFixed(2) + " M";
        } else {
            unitText.textContent = "Invalid input.";
        }
    }
}

export function convertTemp() {
    let isNull = document.getElementById("inputTemp").value.trim();
    let tempFrom = document.getElementById("convertFromTemp").value;
    let tempRequest = document.getElementById("convertToTemp").value;
    let tempText = document.getElementById("textTemp");

    if (isNull === ""){
        tempText.textContent = "Enter a valid number.";
        return;
    }

    let tempInput = parseFloat(isNull);

    if (isNaN(tempInput)) {
        tempText.textContent = "Enter a valid number.";
        return;
    } 
    
    if (tempFrom === "C") {
        if (tempRequest === "F") {
            let result = (tempInput * 9/5) + 32;
            tempText.textContent = result.toFixed(2) + " °F";
        } else if (tempRequest === "K") {
            let result = tempInput + 273.15;
            tempText.textContent = result.toFixed(2) + " K";
        } else if (tempRequest === "C") {
            let result = tempInput;
            tempText.textContent = result.toFixed(2) + " °C";
        } else {
            tempText.textContent = "Invalid input.";
        }
    
    } else if (tempFrom === "F") {
        if (tempRequest === "C") {
            let result = (tempInput - 32) * 5/9;
            tempText.textContent = result.toFixed(2) + " °C";
        } else if (tempRequest === "K") {
            let result = (tempInput - 32) * 5/9 + 273.15;
            tempText.textContent = result.toFixed(2) + " K";
        } else if (tempRequest === "F") {
            let result = tempInput;
            tempText.textContent = result.toFixed(2) + " °F";
        } else {
            tempText.textContent = "Invalid input.";
        }

    } else if (tempFrom === "K") {
        if (tempRequest === "C") {
            let result = tempInput - 273.15;
            tempText.textContent = result.toFixed(2) + " °C";
        } else if (tempRequest === "F") {
            let result = (tempInput - 273.15) * 9/5 + 32;
            tempText.textContent = result.toFixed(2) + " °F";
        } else if (tempRequest === "K") {
            let result = tempInput;
            tempText.textContent = result.toFixed(2) + " K";
        } else {
            tempText.textContent = "Invalid input.";
        }

    } else {
        tempText.textContent = "Invalid input.";
    }
}

export function convertTime() {
    let isNull = document.getElementById("inputTime").value.trim();
    let timeFrom = document.getElementById("convertFromTime").value;
    let timeRequest = document.getElementById("convertToTime").value;
    let timeText = document.getElementById("textTime");

    if (isNull === ""){
        timeText.textContent = "Enter a valid number.";
        return;
    }

    let timeInput = parseFloat(isNull);

    if (isNaN(timeInput) || timeInput < 0) {
        timeText.textContent = "Enter a positive number.";
        return;
    } 
    
    if (timeFrom === "H") {
        if (timeRequest === "M") {
            let result = timeInput * 60;
            timeText.textContent = result.toFixed(0) + " Minutes";
        } else if (timeRequest === "S") {
            let result = timeInput * 3600; 
            timeText.textContent = result.toFixed(0) + " Seconds";
        } else if (timeRequest === "H") {
            let result = timeInput;
            timeText.textContent = result.toFixed(2) + " Hours";
        } else {
            timeText.textContent = "Invalid unit.";
        }
    
    } else if (timeFrom === "M") {
        if (timeRequest === "H") {
            let result = timeInput / 60;
            timeText.textContent = result.toFixed(2) + " Hours";
        } else if (timeRequest === "S") {
            let result = timeInput * 60;
            timeText.textContent = result.toFixed(0) + " Seconds";
        } else if (timeRequest === "M") {
            let result = timeInput;
            timeText.textContent = result.toFixed(2) + " Minutes";
        } else {
            timeText.textContent = "Invalid unit.";
        }

    } else if (timeFrom === "S") {
        if (timeRequest === "H") {
            let result = timeInput / 3600;
            timeText.textContent = result.toFixed(4) + " Hours";
        } else if (timeRequest === "M") {
            let result = timeInput / 60;
            timeText.textContent = result.toFixed(2) + " Minutes";
        } else if (timeRequest === "S") {
            let result = timeInput;
            timeText.textContent = result.toFixed(2) + " Seconds";
        } else {
            timeText.textContent = "Invalid unit.";
        }

    } else {
        timeText.textContent = "Invalid unit.";
    }
}