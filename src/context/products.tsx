import { ReactNode, createContext, useState } from "react";
import { CategoryType, ProductOrEmpty, ProductType, SideDishType } from "../protocols";

interface ProductContextProps {
    categories: CategoryType[];
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    sideDishes: SideDishType[];
    setSideDishes: React.Dispatch<React.SetStateAction<SideDishType[]>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
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
    setCartProducts: () => { }
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
    const [cartProducts, setCartProducts] = useState<any[]>([])

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
            cartProducts, setCartProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}