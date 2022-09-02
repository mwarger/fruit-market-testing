import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { CartListing } from './CartListing';

const cartItems = [
	{
		id: '1',
		name: 'Product 1',
		price: 10,
		quantity: 1,
	},
	{
		id: '2',
		name: 'Product 2',
		price: 20,
		quantity: 1,
	},
];

test('should show products', () => {
	const removeFromCartMock = vi.fn();
	const updateProductQuantityMock = vi.fn();

	render(
		<CartListing
			cartItems={cartItems}
			removeFromCart={removeFromCartMock}
			updateProductQuantity={updateProductQuantityMock}
		/>
	);

	// get the first product name
	const product1 = screen.getByText('Product 1');

	// get the second product name
	const product2 = screen.getByText('Product 2');

	// check if the product name is in the document
	expect(product1).toBeInTheDocument();
	expect(product2).toBeInTheDocument();
});
