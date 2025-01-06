const currencies = {
    "CNY": "Chinese Yuan",
    "JPY": "Japanese Yen",
    "KRW": "South Korean Won",
    "INR": "Indian Rupee",
    "SGD": "Singapore Dollar",
    "HKD": "Hong Kong Dollar",
    "TWD": "Taiwan Dollar",
    "MYR": "Malaysian Ringgit",
    "THB": "Thai Baht",
    "IDR": "Indonesian Rupiah",
    "PHP": "Philippine Peso",
    "VND": "Vietnamese Dong",
    "PKR": "Pakistani Rupee",
    "BDT": "Bangladeshi Taka",
    "EUR": "Euro",
    "GBP": "British Pound",
    "CHF": "Swiss Franc",
    "SEK": "Swedish Krona",
    "NOK": "Norwegian Krone",
    "DKK": "Danish Krone",
    "PLN": "Polish Złoty",
    "CZK": "Czech Koruna",
    "HUF": "Hungarian Forint",
    "RON": "Romanian Leu",
    "USD": "US Dollar"
};

// Placeholder for dynamic exchange rates
let exchangeRates = {};

async function fetchExchangeRates() {
    try {
        // Replace with your own API key or URL
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // For example, ExchangeRate-API
        const data = await response.json();
        
        if (data && data.rates) {
            exchangeRates = data.rates; // Save rates to exchangeRates object
            populateCurrencyDropdowns();
        } else {
            alert("Failed to load exchange rates.");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}

// Function to populate currency dropdowns
function populateCurrencyDropdowns() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    
    // Sort the currencies alphabetically by name
    const sortedCurrencies = Object.keys(currencies).sort((a, b) => currencies[a].localeCompare(currencies[b]));
    
    for (const currency of sortedCurrencies) {
        if (exchangeRates[currency]) {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            
            option1.value = option2.value = currency;
            option1.text = option2.text = `${currency} - ${currencies[currency]}`;
            
            fromSelect.add(option1);
            toSelect.add(option2);
        }
    }
    
    // Set default values
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    // Convert to USD first (if not already USD)
    const usdAmount = fromCurrency === 'USD' ? amount : amount / exchangeRates[fromCurrency];
    
    // Convert from USD to target currency
    const convertedAmount = toCurrency === 'USD' ? usdAmount : usdAmount * exchangeRates[toCurrency];
    
    document.getElementById('result').value = convertedAmount.toFixed(2);
    document.getElementById('exchange-rate').innerHTML = 
        `1 ${fromCurrency} = ${(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} ${toCurrency}`;
}

// Initialize the converter
document.addEventListener('DOMContentLoaded', () => {
    fetchExchangeRates(); // Fetch the exchange rates on page load
});
