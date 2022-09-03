import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import { CartContextProps, CartProvider } from './CartContext';
import { FruitList } from './ProductList';

const cartContextRender = (
	ui: React.ReactNode,
	{ providerProps, ...renderOptions }: any
) => {
	return render(
		<MemoryRouter>
			<CartProvider {...providerProps}>{ui}</CartProvider>
		</MemoryRouter>,
		{
			...renderOptions,
		}
	);
};

test('should show products', () => {
	const providerProps: CartContextProps = {
		addToCart: () => {},
		removeFromCart: () => {},
		updateProductQuantity: () => {},
		cartItems: [],
	};

	cartContextRender(<FruitList />, { providerProps });

	const apple = screen.getByText('Apple');
	const banana = screen.getByText('Banana');

	expect(apple).toBeInTheDocument();
	expect(banana).toBeInTheDocument();
});
