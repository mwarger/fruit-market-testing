import { AddCircleOutline } from '@mui/icons-material';
import {
	List,
	ListItem,
	IconButton,
	ListItemText,
	ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import { Product } from './types';

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
	{
		id: '3',
		name: 'Orange',
		price: 3.0,
	},
	{
		id: '4',
		name: 'Pineapple',
		price: 4.0,
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
							<ListItemButton component={Link} to={product.name.toLowerCase()}>
								<ListItemText
									primary={product.name}
									secondary={priceFormatted}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</>
	);
}
