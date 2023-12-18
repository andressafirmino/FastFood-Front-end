import { useContext, useState } from "react";
import { SearchContainer } from "./style";
import { ProductContext } from "../../context/products";

export default function Search() {

    const { products, productsList, setProductsList } = useContext(ProductContext)
    const [searchText, setSearchText] = useState("");

    console.log(productsList)
    function handleSearch(searchValue: string) {
        const searchValueLower = searchValue.toLowerCase();
        const searchedProducts = products.filter(product => (
            product.id.toString().toLowerCase().includes(searchValueLower)) ||
            product.name.toLowerCase().includes(searchValueLower) ||
            product.description.toLowerCase().includes(searchValueLower) ||
            product.category.toLowerCase().includes(searchValueLower)
        )
        setProductsList(searchedProducts);
    }

    return (
        <SearchContainer>
            <p>Seja bem-vindo!</p>
            <form>
                <input type="text" placeholder="O que você procura?"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                        setSearchText(e.target.value);
                    }}
                    value={searchText} />
            </form>
        </SearchContainer>
    )
}