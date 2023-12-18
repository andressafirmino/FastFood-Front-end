import { SearchContainer } from "./style";

export default function Search() {
    return (
        <SearchContainer>
            <p>Seja bem-vindo!</p>
            <form>
                <input placeholder="O que você procura?"/>
            </form>
        </SearchContainer>
    )
}