import { ProductContainer } from "./style";

export default function Product({ props }: any) {

    const pricePtBr = (props.price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return (
        <ProductContainer>
            <div className="img"><img src={props.image} /></div>
            <div className="information">
                <p className="name">{props.name}</p>
                <p className="description">{props.description}</p>
                <p className="price">{pricePtBr}</p>
            </div>
        </ProductContainer>
    )
}