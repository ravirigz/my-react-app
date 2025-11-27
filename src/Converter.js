function convertCurrency() {
    let isNull = document.getElementById("inputAmount").value.trim();
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

    if (currencyRequest === "EUR") {
        let result = currencyInput * 0.8635;
        currencyText.textContent = result.toFixed(2) + " EUR";
    } else if (currencyRequest === "PHP") {
        let result = currencyInput * 58.77;
        currencyText.textContent = result.toFixed(2) + " PHP";
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
