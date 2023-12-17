import { ReactNode, createContext, useState } from "react";
import { CategoryType, ProductType, SideDishType } from "../protocols";

interface ProductContextProps {
    categories: CategoryType[];
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    sideDishes: SideDishType[];
    setSideDishes: React.Dispatch<React.SetStateAction<SideDishType[]>>;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ProductContext = createContext<ProductContextProps>({
    categories: [],
    setCategories: () => { },
    products: [],
    setProducts: () => { },
    sideDishes: [],
    setSideDishes: () => { },
    cart: [],
    setCart: () => {},
});

interface ProductProviderProps {
    children: ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sideDishes, setSideDishes] = useState<SideDishType[]>([]);
    const [cart, setCart] = useState<any[]>([]);


    return (
        <ProductContext.Provider value={{
            categories, setCategories,
            products, setProducts,
            sideDishes, setSideDishes,
            cart, setCart,
        }}>
            {children}
        </ProductContext.Provider>
    )
}