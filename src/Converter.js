function convertCurrency() {
    let currencyInput = parseInt(document.getElementById("inputAmount").value);
    let currencyRequest = document.getElementById("convertTo").value;
    let currencyText = document.getElementById("textCurrency");

    if (currencyRequest === "EUR") {
        currencyText.textContent = currencyInput * 0.93 + " EUR";
    } else if (currencyRequest === "PHP") {
        currencyText.textContent = currencyInput * 56.5 + " PHP";
    } else {
        currencyText.textContent = "Invalid input!";
        alert("invalid input!");
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
