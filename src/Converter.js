function convertCurrency() {
    let isNull = document.getElementById("inputAmount").value.trim();
    let currencyFrom = document.getElementById("convertFrom").value;
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


function convertUnit() {
    let isNull = document.getElementById("inputUnit").value.trim();
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

    if (unitRequest === "KM") {
        let result = unitInput * 1.609344;
        unitText.textContent = result.toFixed(2) + " KM";
    } else if (unitRequest === "M") {
        let result = unitInput * 1609.344;
        unitText.textContent = result.toFixed(2) + " M";
    } else {
        unitText.textContent = "Invalid input.";
    }
}
