import React from 'react';
import { FruitMarketItem, FruitMarketItemWithQuantity } from './types';

export type CartContextProps = {
	cartItems: Array<FruitMarketItemWithQuantity>;
	addToCart: (product: FruitMarketItem) => void;
	removeFromCart: (product: FruitMarketItem) => void;
	updateProductQuantity: (product: FruitMarketItem, quantity: number) => void;
};

export const CartContext = React.createContext<CartContextProps | undefined>(
	undefined
);

export const CartConsumer = CartContext.Consumer;

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = React.useState<
		Array<FruitMarketItemWithQuantity>
	>([]);

	const addToCart = (product: FruitMarketItem) => {
		console.log('addToCart', product);

		const existingProduct = cartItems.find(item => item.id === product.id);

		if (existingProduct) {
			setCartItems(
				cartItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	const removeFromCart = (product: FruitMarketItem) => {
		console.log('removeFromCart', product);

		setCartItems(prevCartItems =>
			prevCartItems.filter(item => item.id !== product.id)
		);
	};

	const updateProductQuantity = (
		product: FruitMarketItem,
		quantity: number
	) => {
		console.log('updateProductQuantity', product, quantity);

		setCartItems(prevCartItems =>
			prevCartItems.map(item =>
				item.id === product.id ? { ...item, quantity } : item
			)
		);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, updateProductQuantity }}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCartContext() {
	const context = React.useContext(CartContext);
	if (!context) {
		throw new Error('useCartContext must be used within a CartContextProvider');
	}
	return context;
}
