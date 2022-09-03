import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import { CartProvider } from './CartContext';
import { FruitList } from './ProductList';

const cartContextRender = (ui, { providerProps, ...renderOptions }) => {
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
	const providerProps = {
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
