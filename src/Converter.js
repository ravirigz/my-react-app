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
    let UnitInput = parseInt(document.querySelector("#inputUnit").value);
    let UnitRequest = document.querySelector("#convertUnit").value;
    let UnitText = document.querySelector("#textUnit");

    if (UnitRequest === "M") {
        UnitText.textContent = UnitInput * 0.0006 + " M";
    } else if (UnitRequest === "MI") {
        UnitText.textContent = UnitInput + " MI";
    } else if (UnitRequest === "KM") {
        UnitText.textContent = UnitInput * 0.62 + " KM";
    } else {
        UnitText.textContent = "Invalid input!";
        alert("invalid input!");
    }
}
