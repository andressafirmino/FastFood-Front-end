import axios from "axios";
import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";

export default function Category({name, image, category}: CategoryType ) {
    function getProductsByCategory(category: string) {
        const url = `${import.meta.env.VITE_API_URL}/produtos/${category}`
        axios.get(url)
            .then(response => console.log(response.data))
            .catch(e => console.log(e.message))
    }
    return (
        <CategoryContainer onClick={() => getProductsByCategory(category)}>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}