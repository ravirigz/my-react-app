function convertCurrency() {
    let currencyInput = parseInt(document.querySelector('inputAmount').value);
    let currencyRequest = document.querySelector('convertTo').value;
    let currencyText = document.querySelector('textCurrency');

    if (currencyRequest === "EUR") {
        currencyText.textContent = currencyInput * 0.93 + " EUR";
    } else if (currencyRequest === "PHP") {
        currencyText.textContent = currencyInput * 56.5 + " PHP";
    } else {
        currencyText.textContent = "Invalid input!";
        alert("WAGJASJDGSA");
    }
}