import { ReactNode, createContext, useState } from "react";
import { AdditionalType, CartOrEmpty, CategoryType, ProductOrEmpty, ProductType, SideDishType } from "../protocols";

interface ProductContextProps {
    categories: CategoryType[];
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    sideDishes: SideDishType[];
    setSideDishes: React.Dispatch<React.SetStateAction<SideDishType[]>>;
    cart: CartOrEmpty[];
    setCart: React.Dispatch<React.SetStateAction<CartOrEmpty[]>>;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProduct: ProductOrEmpty;
    setSelectedProduct: React.Dispatch<React.SetStateAction<ProductOrEmpty>>;
    productsList: ProductType[];
    setProductsList: React.Dispatch<React.SetStateAction<ProductType[]>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    cartProducts: any[];
    setCartProducts: React.Dispatch<React.SetStateAction<any[]>>;
    additionalTotal: AdditionalType[];
    setAdditionalTotal: React.Dispatch<React.SetStateAction<AdditionalType[]>>;
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext<ProductContextProps>({
    categories: [],
    setCategories: () => { },
    products: [],
    setProducts: () => { },
    sideDishes: [],
    setSideDishes: () => { },
    cart: [],
    setCart: () => { },
    selected: false,
    setSelected: () => { },
    selectedProduct: {},
    setSelectedProduct: () => { },
    productsList: [],
    setProductsList: () => { },
    total: 0,
    setTotal: () => { },
    cartProducts: [],
    setCartProducts: () => { },
    additionalTotal: [],
    setAdditionalTotal: () => { },
    disabled: true,
    setDisabled: () => { }
});

interface ProductProviderProps {
    children: ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sideDishes, setSideDishes] = useState<SideDishType[]>([]);
    const [cart, setCart] = useState<any[]>([]);
    const [selected, setSelected] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductOrEmpty>({});
    const [productsList, setProductsList] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [cartProducts, setCartProducts] = useState<any[]>([]);
    const [additionalTotal, setAdditionalTotal] = useState<AdditionalType[]>([]);
    const [disabled, setDisabled] = useState<boolean>(false);

    return (
        <ProductContext.Provider value={{
            categories, setCategories,
            products, setProducts,
            sideDishes, setSideDishes,
            cart, setCart,
            selected, setSelected,
            selectedProduct, setSelectedProduct,
            productsList, setProductsList,
            total, setTotal,
            cartProducts, setCartProducts,
            additionalTotal, setAdditionalTotal,
            disabled, setDisabled
        }}>
            {children}
        </ProductContext.Provider>
    )
}