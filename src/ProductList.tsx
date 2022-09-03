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
import { FruitMarketItem } from './types';

const fruits: Array<FruitMarketItem> = [
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
	{
		id: '5',
		name: 'Strawberry',
		price: 2.0,
	},
];

export function FruitList() {
	const { addToCart } = useCartContext();
	const handleAddToCart = (fruit: FruitMarketItem) => {
		addToCart(fruit);
	};

	return (
		<>
			<h2>Produce List</h2>

			<List>
				{fruits.map(fruit => {
					// format price
					const price = fruit.price.toFixed(2);

					// add currency symbol
					const priceFormatted = `$${price}`;

					return (
						<ListItem
							key={fruit.id}
							secondaryAction={
								<IconButton
									edge='end'
									aria-label='delete'
									onClick={() => {
										handleAddToCart(fruit);
									}}
								>
									<AddCircleOutline />
								</IconButton>
							}
						>
							<ListItemButton component={Link} to={fruit.name.toLowerCase()}>
								<ListItemText primary={fruit.name} secondary={priceFormatted} />
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</>
	);
}
