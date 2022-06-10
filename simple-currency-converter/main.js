console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`);

const input = require('sync-input');

let currencies = ["JPY", "EUR", "GBP", "RUB", "USD"];
let currencyInput = input("To:").toUpperCase();
if (!(currencies.includes(currencyInput))) {
	console.log("Unknown currency");
	return;
}

let amountInput = Number(input("Amoint:"));
let result;

if (isNaN(amountInput)) {
	console.log("The amount has to be a number");
	return;
} else if (amountInput < 1) {
	console.log("The amount can not be less than 1");
	return;
} else if (currencyInput === "JPY") {
	result = (amountInput * 113.5).toFixed(4);
}	else if (currencyInput === "EUR") {
	result = (amountInput * 0.89).toFixed(4);
} else if (currencyInput === "RUB") {
	result = (amountInput * 74.36).toFixed(4);
} else if (currencyInput === "GBP") {
	result = (amountInput * 0.75).toFixed(4);
} else if (currencyInput === "USD") {
	result = (amountInput).toFixed(4);
}

console.log(`Result: ${amountInput} USD equals ${result} ${currencyInput}`);

// ---- solutions ----

// ---- 1 ----
let currencies = ["USD", "JPY", "EUR", "GBP"];
let prices = [1, 113.5, 0.89, 74.36, 0.75];

currencies.forEach((currency, index) => console.log(`1 USD equals ${prices[index]} ${currency}`));

let baseCurrency = "USD";
let targetCurrency = input("To:").toUpperCase().trim();
let amount = Number(input("Amount:").trim());
let result = amount * prices[currencies.indexOf(targetCurrency)] / prices[currencies.indexOf((baseCurrency))];
// ---- /1 ----

// ---- 2 ----
const input = require("sync-input");
let currency = {
	USD: 1,
	JPY: 113.5,
	EUR: 0.89,
	RUB: 74.36,
	GBP: 0.75
}

function convertCurrencies() {
	console.log("What do you want to convert?");
	let answer = input("From:").toUpperCase();

	if (!(answer in currency)) {
		console.log("Unknown currency");
		return;
	}

	let answer2 = input("To:").toUpperCase();

	if (!(answer2 in currency)) {
		console.log("Unknown currency");
		return;
	}

	let amount = Number(input("Amount:"));

	if (amount < 0) {
		console.log("The amount can not be less than 1");
	}
	else if (isNaN(amount)) {
		console.log("The amount has to be a number");
	}
	else {
		const convert = currency[answer2] * (amount / currency[answer]);
		console.log(`Result: ${amount} ${answer} equals ${convert.toFixed(4)} ${answer2}`);
	}
}

function startProgram() {
	console.log(`Welcome to Currency Converter!
	1 USD equals  1 USD
	1 USD equals  113.5 JPY
	1 USD equals  0.89 EUR
	1 USD equals  74.36 RUB
	1 USD equals  0.75 GBP`);

	console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
	Type the currency you wish to convert: USD`);

	while (true) {
		console.log("What do you want to do?");
		let choose = input("1-Convert currencies 2-Exit program\n");

		if (choose === "2") {
			console.log("Have a nice day");
			break;
		}
		else if (choose === "1") {
			convertCurrencies();
		}
		else {
			console.log("Unknown input");
		}
	}
}

startProgram();
// ---- /2 ----