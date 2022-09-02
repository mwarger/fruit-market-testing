import { ProductWithQuantity } from '../types';

// takes quantity and price and returns the total price
export function calculatePrice(quantity: number, price: number): number {
	return quantity * price;
}

// takes an array of products and returns the total price
export function calculateTotalPrice(products: ProductWithQuantity[]): number {
	return products.reduce((total, product) => {
		return total + calculatePrice(product.quantity, product.price);
	}, 0);
}
