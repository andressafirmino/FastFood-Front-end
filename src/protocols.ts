
export type CategoryType = {
    name: string;
    image: string;
    category: string
}

export type ProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}


export type ProductOrEmpty = EmptyProduct | ProductType;

export type SideDishType = {
    id: number;
    name: string;
    price: number,
    description: string;
    image: string
    productId: null
}

export type AdditionalType = {
    name: string;
    price: number
}

export type AdditionalOrEmpty = AdditionalType | EmptyProduct;

export type EmptyProduct = {};

export type EmptyType = [];

export type CartType = {
    product: {
        id: number,
        name: string;
        image: string;
        price: number;
        quantity: number;
        observation: string;
    };
    additional: AdditionalOrEmpty[]
}

export type CartOrEmpty = EmptyType | CartType;