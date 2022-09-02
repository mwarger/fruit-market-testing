export type Product = {
	id: string;
	name: string;
	price: number;
};

export type ProductWithQuantity = Product & { quantity: number };

export type Fruit = {
	genus: string;
	name: string;
	id: number;
	family: string;
	order: string;
	nutritions: {
		carbohydrates: number;
		protein: number;
		fat: number;
		calories: number;
		sugar: number;
	};
};