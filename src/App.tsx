import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import { Layout } from './Layout';
import { ProductList } from './ProductList';

function App() {
	return (
		<CartProvider>
			<Layout>
				<Routes>
					<Route path='/' element={<Navigate to={'/product-list'} />} />
					<Route path='/product-list' element={<ProductList />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</Layout>
		</CartProvider>
	);
}

export default App;
