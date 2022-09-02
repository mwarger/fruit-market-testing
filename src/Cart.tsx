import { Stack, Typography } from '@mui/material';
import { useCartContext } from './CartContext';
import { CartListing } from './CartListing';
import { Product, ProductWithQuantity } from './Product';
import { calculateTotalPrice } from './utils/calculatorFunctions';

export function Cart() {
	const { cartItems, removeFromCart, updateProductQuantity } = useCartContext();

	function handleRemoveFromCart(product: Product) {
		removeFromCart(product);
	}

	return (
		<>
			<h2>Cart</h2>
			{cartItems.length ? (
				<Stack rowGap={2}>
					<CartListing
						cartItems={cartItems}
						removeFromCart={handleRemoveFromCart}
						updateProductQuantity={updateProductQuantity}
					/>
					<TotalPriceDisplay cartItems={cartItems} />
				</Stack>
			) : (
				<p>Cart is empty</p>
			)}
		</>
	);
}

function TotalPriceDisplay({
	cartItems,
}: {
	cartItems: Array<ProductWithQuantity>;
}) {
	const totalPrice = calculateTotalPrice(cartItems);

	return (
		<Stack direction='row' justifyContent={'flex-end'}>
			<Typography variant='h5' component='div'>
				Total: ${totalPrice.toFixed(2)}
			</Typography>
		</Stack>
	);
}
