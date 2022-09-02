import React from 'react';
import { Product, ProductWithQuantity } from './types';

export type CartContextProps = {
	cartItems: Array<ProductWithQuantity>;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	updateProductQuantity: (product: Product, quantity: number) => void;
};

export const CartContext = React.createContext<CartContextProps | undefined>(
	undefined
);

export const CartConsumer = CartContext.Consumer;

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = React.useState<Array<ProductWithQuantity>>(
		[]
	);

	const addToCart = (product: Product) => {
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

	const removeFromCart = (product: Product) => {
		console.log('removeFromCart', product);

		setCartItems(prevCartItems =>
			prevCartItems.filter(item => item.id !== product.id)
		);
	};

	const updateProductQuantity = (product: Product, quantity: number) => {
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
