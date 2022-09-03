import { test } from 'vitest';
import { calculatePrice, calculateTotalPrice } from './calculatorFunctions';

test('Calculate price * quantity', () => {
	expect(calculatePrice(2, 2.5)).toBe(5.0);
	expect(calculatePrice(1, 1.0)).toBe(1.0);
	expect(calculatePrice(3, 2.5)).toBe(7.5);
});

test('Add product prices', () => {
	const product1 = {
		id: '1',
		name: 'Product 1',
		price: 1.0,
		quantity: 1,
	};

	const product2 = {
		id: '2',
		name: 'Product 2',
		price: 2.0,
		quantity: 2,
	};

	expect(calculateTotalPrice([product1, product2])).toBe(5);

	const product3 = {
		id: '3',
		name: 'Product 3',
		price: 3.0,
		quantity: 3,
	};

	expect(calculateTotalPrice([product1, product2, product3])).toBe(14);

	const product4 = {
		id: '4',
		name: 'Product 4',
		price: 4.0,
		quantity: 4,
	};

	expect(calculateTotalPrice([product1, product2, product3, product4])).toBe(
		30
	);
});
