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
    setSelected: React.Dispatch<React.SetStateAction<boolean>>
    selectedProduct: ProductOrEmpty,
    setSelectedProduct: React.Dispatch<React.SetStateAction<ProductOrEmpty>>
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
    setSelectedProduct: () => { }

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


    return (
        <ProductContext.Provider value={{
            categories, setCategories,
            products, setProducts,
            sideDishes, setSideDishes,
            cart, setCart,
            selected, setSelected,
            selectedProduct, setSelectedProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}