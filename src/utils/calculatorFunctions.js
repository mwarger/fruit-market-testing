// takes quantity and price and returns the total price
export function calculatePrice(quantity, price) {
	return quantity * price;
}

// takes an array of products and returns the total price
export function calculateTotalPrice(products) {
	return products.reduce((total, product) => {
		return total + calculatePrice(product.quantity, product.price);
	}, 0);
}
