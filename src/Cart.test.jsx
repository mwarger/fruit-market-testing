import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Cart } from './Cart';
import { CartContextProps, CartProvider } from './CartContext';

const cartContextRender = (ui, { providerProps, ...renderOptions }) => {
	return render(<CartProvider {...providerProps}>{ui}</CartProvider>, {
		...renderOptions,
	});
};

test('should show cart items', () => {
	const providerProps = {
		addToCart: () => {},
		removeFromCart: () => {},
		updateProductQuantity: () => {},
		cartItems: [
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
		],
	};

	cartContextRender(<Cart />, { providerProps });

	const cartHeader = screen.getByText('Cart', { selector: 'h2' });

	expect(cartHeader).toBeInTheDocument();
});

test('should show message if cart is empty', () => {
	const providerProps = {
		addToCart: () => {},
		removeFromCart: () => {},
		updateProductQuantity: () => {},
		cartItems: [],
	};

	cartContextRender(<Cart />, { providerProps });

	const cartIsEmptyMessage = screen.getByText('Cart is empty');

	expect(cartIsEmptyMessage).toBeInTheDocument();
});
