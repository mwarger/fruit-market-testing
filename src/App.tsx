import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import { Layout } from './Layout';
import { ProductItem } from './ProductItem';
import { FruitList } from './ProductList';

function App() {
	return (
		<CartProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<Navigate to={'/product-list'} />} />
					<Route path='/product-list' element={<FruitList />} />
					<Route path='/product-list/:productId' element={<ProductItem />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</Layout>
		</CartProvider>
	);
}

const fruit = {
	genus: 'Malus',
	name: 'Apple',
	id: 6,
	family: 'Rosaceae',
	order: 'Rosales',
	nutritions: {
		carbohydrates: 11.4,
		protein: 0.3,
		fat: 0.4,
		calories: 52,
		sugar: 10.3,
	},
};



export default App;
