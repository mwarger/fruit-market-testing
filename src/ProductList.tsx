import { AddCircleOutline } from '@mui/icons-material';
import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import { useCartContext } from './CartContext';
import { Product } from './Product';

const products: Array<Product> = [
	{
		id: '1',
		name: 'Apple',
		price: 2.5,
	},
	{
		id: '2',
		name: 'Banana',
		price: 1.0,
	},
];

export function ProductList() {
	const { addToCart } = useCartContext();
	const handleAddToCart = (product: Product) => {
		addToCart(product);
	};

	return (
		<>
			<h2>Product List</h2>

			<List>
				{products.map(product => {
					// format price
					const price = product.price.toFixed(2);

					// add currency symbol
					const priceFormatted = `$${price}`;

					return (
						<ListItem
							key={product.id}
							secondaryAction={
								<IconButton
									edge='end'
									aria-label='delete'
									onClick={() => {
										handleAddToCart(product);
									}}
								>
									<AddCircleOutline />
								</IconButton>
							}
						>
							<ListItemText primary={product.name} secondary={priceFormatted} />
						</ListItem>
					);
				})}
			</List>
		</>
	);
}
