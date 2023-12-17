import { CategoryType } from "../../protocols";
import { CategoryContainer } from "./style";

export default function Category({name, image}: CategoryType ) {
    return (
        <CategoryContainer>
            <img src={image} />
            <p className="name">{name}</p>
        </CategoryContainer>
    )
}