export type FruitMarketItem = {
	id: string;
	name: string;
	price: number;
};

export type FruitMarketItemWithQuantity = FruitMarketItem & {
	quantity: number;
};

export type FruitApiItem = {
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
