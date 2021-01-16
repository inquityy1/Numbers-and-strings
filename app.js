function randomIntBetweenn(min, max) { //min: 5, max: 10
	return Math.floor(Math.random() * (max - min + 1) + min); //10.99999999 => 10
}

console.log(randomIntBetweenn(1, 10));

function productDescription(strings, productName, productPrice) {
	console.log(strings);
	console.log(productName);
	console.log(productPrice);
	let priceCategory = 'cheap';
	if (productPrice > 20) {
		priceCategory = 'fair';
	}
	return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
	//return {name: productName, price: productPrice};
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);