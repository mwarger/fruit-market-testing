import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { CartContextProps, CartProvider } from './CartContext';
import { ProductList } from './ProductList';

const cartContextRender = (
	ui: React.ReactNode,
	{ providerProps, ...renderOptions }: any
) => {
	return render(<CartProvider {...providerProps}>{ui}</CartProvider>, {
		...renderOptions,
	});
};

test('should show products', () => {
	const providerProps: CartContextProps = {
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

	cartContextRender(<ProductList />, { providerProps });

	const apple = screen.getByText('Apple');
	const banana = screen.getByText('Banana');

	expect(apple).toBeInTheDocument();
	expect(banana).toBeInTheDocument();
});
