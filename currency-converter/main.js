//Write your code here
function currencyConverter() {
	console.log('Welcome to Currency Converter!');
	const currencyList = ['1 USD', '113.5 JPY', '0.89 EUR', '74.36 RUB', '0.75 GBP'];
	for (let currencyListItem of currencyList) {
	  console.log(`1 USD equals  ${currencyListItem}`);
	}
 }
 currencyConverter();