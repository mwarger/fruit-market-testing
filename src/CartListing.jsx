import { CloseOutlined } from '@mui/icons-material';
import { List, ListItem, IconButton, ListItemText, Stack } from '@mui/material';
import { QuantityNumberInput } from './QuantityNumberInput';
import { calculatePrice } from './utils/calculatorFunctions';

export function CartListing({
	cartItems,
	removeFromCart,
	updateProductQuantity,
}) {
	return (
		<List>
			{cartItems.map(product => {
				// format price
				const price = product.price.toFixed(2);

				// add currency symbol
				const priceFormatted = `$${price}`;

				const productPrice = calculatePrice(product.quantity, product.price);

				// format price
				const productPriceFormatted = `$${productPrice.toFixed(2)}`;

				return (
					<ListItem
						key={product.id}
						secondaryAction={
							<IconButton
								edge='end'
								aria-label='delete'
								onClick={() => {
									removeFromCart(product);
								}}
							>
								<CloseOutlined />
							</IconButton>
						}
					>
						<Stack
							direction='row'
							spacing={2}
							alignItems='center'
							justifyContent='space-between'
							width={'100%'}
						>
							<ListItemText
								primary={product.name}
								secondary={priceFormatted}
								sx={{ width: 100 }}
							/>
							<ListItemText
								primary={
									<QuantityNumberInput
										value={product.quantity}
										onChange={value => {
											if (value > 0) {
												updateProductQuantity(product, value);
											}
										}}
										label='Quantity'
									/>
								}
							/>
							<ListItemText primary={`Total: ${productPriceFormatted}`} />
						</Stack>
					</ListItem>
				);
			})}
		</List>
	);
}
