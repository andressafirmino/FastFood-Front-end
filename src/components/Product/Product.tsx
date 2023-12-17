import { ProductType } from "../../protocols";
import { ProductContainer } from "./style";

export default function Product({ name, price, description, image }: ProductType) {

    const pricePtBr = (price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return (
        <ProductContainer>
            <div className="img"><img src={image} /></div>
            <div className="information">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{pricePtBr}</p>
            </div>
        </ProductContainer>
    )
}