function calculate() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var amount = parseFloat(document.getElementById("amount").value);

    // Create a structure to handle currency exchange rates
    var exchangeRate = {
        "USD_PKR": 276.88,
        "EUR_PKR": 292.93,
        "USD_EUR": 0.95,
        "EUR_USD": 1.06,
        "PKR_USD": 0.0036,
        "PKR_EUR": 0.0034  
    };


    // Currency convertion
    var result;

    if (fromCurrency == "USD" && toCurrency == "PKR") {
        result = amount * exchangeRate["USD_PKR"];
    } 
    else if (fromCurrency == "PKR" && toCurrency == "USD") {
        result = amount * exchangeRate["PKR_USD"];
    }
    else if (fromCurrency == "EUR" && toCurrency == "PKR") {
        result = amount * exchangeRate["EUR_PKR"];
    } 
    else if (fromCurrency == "PKR" && toCurrency == "EUR") {
        result = amount * exchangeRate["PKR_EUR"];
    }
    else if (fromCurrency == "USD" && toCurrency == "EUR") {
        result = amount * exchangeRate["USD_EUR"];
    }
    else if (fromCurrency == "EUR" && toCurrency == "USD") {
        result = amount * exchangeRate["EUR_USD"];
    } 
    

    document.getElementById("result").value = result.toFixed(3);

    displayPrimeAndEvenNumbers(amount);
}

function displayPrimeAndEvenNumbers(n) {
    var primeNumbers = [];
    var evenNumbers = [];

    for (var i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }

        if (i % 2 == 0) {
            evenNumbers.push(i);
        }
    }

    document.getElementById("primeNumbers").textContent = primeNumbers.join(", ");
    document.getElementById("evenNumbers").textContent = evenNumbers.join(", ");
}

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++)
        if (num % i == 0) return false;
    return true;
}
