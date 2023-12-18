import { useContext, useState } from "react";
import { SearchContainer } from "./style";
import { DebounceInput } from "react-debounce-input";
import { ProductContext } from "../../context/products";
import { ProductOrEmpty } from "../../protocols";

export default function Search() {

    const { products } = useContext(ProductContext)

    const [productsList, setProductsList] = useState<ProductOrEmpty>([]);
    const [searchText, setSearchText] = useState("");

    console.log(productsList)
    function handleSearch(searchValue: string) {
        const user = searchValue;
        if (user.length < 3) {
            setProductsList([]);
        }
        else {
            const searchedProducts = products.filter(product => {
                const searchValueLower = searchValue.toLowerCase();
                return (
                    product.id.toString().toLowerCase().includes(searchValueLower)) ||
                    product.name.toLowerCase().includes(searchValueLower) ||
                    product.description.toLowerCase().includes(searchValueLower) ||
                    product.category.toLowerCase().includes(searchValueLower)
            });
            setProductsList(searchedProducts);
        }
    }

    return (
        <SearchContainer>
            <p>Seja bem-vindo!</p>
            <form>
                <DebounceInput type="text" placeholder="O que você procura?" debounceTimeout={300}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                        setSearchText(e.target.value);
                    }}
                    value={searchText} />
            </form>
        </SearchContainer>
    )
}