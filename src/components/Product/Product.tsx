import { useContext } from "react";
import { ProductType } from "../../protocols";
import { ProductContainer } from "./style";
import { ProductContext } from "../../context/products";
import CurrencyConversion from "../../utils/CurrencyConversion";

export default function Product({ id, name, price, description, image }: ProductType) {

    const { setSelected, setSelectedProduct } = useContext(ProductContext)
   /*  const pricePtBr = (price / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    }); */
    return (
        <ProductContainer onClick={() => { setSelectedProduct({ id, name, price, description, image }), setSelected(true) }}>
            <div className="img"><img src={image} /></div>
            <div className="information">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{CurrencyConversion(price)}</p>
            </div>
        </ProductContainer>
    )
}