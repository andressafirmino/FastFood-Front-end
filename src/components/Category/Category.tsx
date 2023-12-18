import axios from "axios";
import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";
import { useContext } from "react";
import { ProductContext } from "../../context/products";

export default function Category({ name, image, category }: CategoryType) {
    const { setProducts } = useContext(ProductContext);
    
    function getProductsByCategory(category: string) {
        const url = `${import.meta.env.VITE_API_URL}/produtos/${category}`
        axios.get(url)
            .then(response => setProducts(response.data))
            .catch(e => console.log(e.message))
    }
    return (
        <CategoryContainer onClick={() => getProductsByCategory(category)}>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}