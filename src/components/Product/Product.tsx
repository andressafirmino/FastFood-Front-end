import { useContext } from "react";
import { ProductType } from "../../protocols";
import { ProductContainer } from "./style";
import { ProductContext } from "../../context/products";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { FaCheck } from "react-icons/fa6";

export default function Product({ id, name, price, description, image }: ProductType) {

    const { setSelected, setSelectedProduct, cartProducts } = useContext(ProductContext)
    console.log(cartProducts)
    return (
        <ProductContainer onClick={() => { setSelectedProduct({ id, name, price, description, image }), setSelected(true) }}>
            {cartProducts.some(prod => prod.product.id === id) && (
                <div className="selected"><FaCheck /></div>
            )}
            <div className="img"><img src={image} /></div>
            <div className="information">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">{CurrencyConversion(price)}</p>
            </div>
        </ProductContainer>
    )
}