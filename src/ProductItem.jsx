import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ProductItem() {
	const { productId } = useParams();

	const [product, setProduct] = (React.useState < FruitApiItem) | (null > null);

	useEffect(() => {
		if (!productId) {
			return;
		}

		fetch(`/api/fruit/${productId}`)
			.then(result => result.json())
			.then(data => {
				console.log(data);
				setProduct(data);
			});
	}, [productId]);

	if (!product) {
		return <Typography>Loading...</Typography>;
	}

	// table data for fruit
	return (
		<Box>
			<Typography>Nutritional Information</Typography>

			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Carbohydrates (g)</TableCell>
						<TableCell>Protein (g)</TableCell>
						<TableCell>Fat (g)</TableCell>
						<TableCell>Calories</TableCell>
						<TableCell>Sugar</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>{product.name}</TableCell>
						<TableCell>{product.nutritions.carbohydrates}</TableCell>
						<TableCell>{product.nutritions.protein}</TableCell>
						<TableCell>{product.nutritions.fat}</TableCell>
						<TableCell>{product.nutritions.calories}</TableCell>
						<TableCell>{product.nutritions.sugar}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Box>
	);
}
