//Write your code here
function currencyConverter() {
	console.log('Welcome to Currency Converter!');
	const currencyList = ['1 USD', '113.5 JPY', '0.89 EUR', '74.36 RUB', '0.75 GBP'];
	for (let currencyListItem of currencyList) {
	  console.log(`1 USD equals  ${currencyListItem}`);
	}
 }
 currencyConverter();


// ----- solutions -----

// ---1---
const currencies = ['1 USD', '113.5 JPY', '0.89 EUR', '74.36 RUB', '0.75 GBP'];
const printCurrencies = (currencies) => {
  console.log('Welcome to Currency Converter!');
  currencies.forEach((currency) => {
    console.log(`1 USD equals  ${currency}`);
  });
};
printCurrencies(currencies);
// ---/1---

// ---2---
const currencies = {"USD": 1,
                    "JPY": 113.5,
                    "EUR": 0.89,
                    "RUB": 74.36,
                    "GBP": 0.75}
function printingCurrencies(currencies){
    console.log("Welcome to Currency Converter!");
    for (let currency of Object.entries(currencies)){
        console.log(`1 USD equals  ${currency[1]} ${currency[0]}`);
    }
}
printingCurrencies(currencies);
// ---/2---

// ---3---
console.log("Welcome to Currency Converter!");
let rates = [
    {"rate": 1, "symbol": "USD"},
    {"rate": 113.5, "symbol": "JPY"},
    {"rate": 0.89, "symbol": "EUR"},
    {"rate": 74.36, "symbol": "RUB"},
    {"rate": 0.75, "symbol": "GBP"},
]
rates.forEach(e =>
    console.log(`1 USD equals  ${e.rate} ${e.symbol}`)
);
// ---/3---

// ---4---
// main.js
const { CurrencyConverter } = require("./src/CurrencyConverter.js");
const { ExchangeRateMap } = require("./src/ExchangeRateMap.js");
const { Currency } = require("./src/Currency.js")

const welcomeMessage = "Welcome to Currency Converter!";
const dollar = new Currency("USD", 1.0)
const yen = new Currency("JPY", 113.5);
const euro = new Currency("EUR", 0.89);
const ruble = new Currency("RUB", 74.36);
const pound = new Currency("GBP", 0.75);
const exchangeRateMap = new ExchangeRateMap(dollar, yen, euro, ruble, pound);
const currencyConverter = new CurrencyConverter(exchangeRateMap);

console.log(welcomeMessage);
console.log(`${currencyConverter}`);

// src/CurrencyConverter.js
/**
 *  Converts currencies based on ExchangeRate
 */
 class CurrencyConverter {

	/**
	 * @param{ExchangeRateMap} exchangeRateMap
	 */
	constructor(exchangeRateMap) {
		 this.exchangeRateMap = exchangeRateMap
	}

	/**
	 * Returns a table of exchange rates
	 * @override
	 * @returns {string}
	 */
	toString = () => {
		 let result = [];
		 for(const [_, currency] of this.exchangeRateMap.currenciesMap) {
			  result.push(`1 USD equals  ${currency.ratePerDollar} ${currency.symbol}`);
		 }
		 return result.join("\n");
	}
}
// module.exports.CurrencyConverter = CurrencyConverter

// src/Currency.js
class Currency {
    /**
     * @param{string} symbol Currency symbol. ex: USD, JPY, EUR, etc
     * @param{number} ratePerDollar The amount of this currency one dollar can buy.
     */
	  constructor(symbol, ratePerDollar) {
		this.symbol = symbol;
		this.ratePerDollar = ratePerDollar;
  }
}
module.exports.Currency = Currency

// src/ExchangeRateMap.js
/**
 * Holds exchange rate values based on dollar as reference currency
 */
 class ExchangeRateMap {
	/**
	 * @param{Currency} currencies
	 */
	constructor(...currencies) {
		 /**@type {Map<string, Currency>} */
		 this.currenciesMap = new Map()
		 currencies.forEach(currency => this.currenciesMap.set(currency.symbol, currency))
	}
}
// module.exports.ExchangeRateMap = ExchangeRateMap
// ---/4---