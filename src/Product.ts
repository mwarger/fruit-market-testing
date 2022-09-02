export type Product = {
	id: string;
	name: string;
	price: number;
};

export type ProductWithQuantity = Product & { quantity: number };
