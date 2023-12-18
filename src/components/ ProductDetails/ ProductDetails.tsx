import { useContext, useState } from "react";
import { ProductType } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { AdditionalContainer, ButtonBoxDetails, CounterButton, DetailBox, DetailContainer, DetailItem, ObservationContainer, SummaryContainer } from "./style";
import { ProductContext } from "../../context/products";
import AdditionalToggle from "../../utils/AdditionalToggle";
import SubtotalCalculation from "../../utils/SubtotalCalculation";

export default function ProductDetail({ id, name, image, description, price }: ProductType) {
    const { sideDishes, setSelected, total, setTotal, cartProducts, setCartProducts } = useContext(ProductContext);
    const [counter, setCounter] = useState(1);
    const [additional, setAdditional] = useState<any[]>([]);
    const [observation, setObservation] = useState("");
    
    function minus() {
        if (counter === 0 || total === 0) {
            return;
        }
        if (counter === 1) {
            const newCart = [...cartProducts];
            let position = newCart.findIndex(product => product.id === id);
            newCart.splice(position, 1);
            setCartProducts(newCart);
        }
        const newCounter = counter - 1;
        setCounter(newCounter > 0 ? newCounter : 0);
        setTotal((amount) => amount - price);
    }
    function plus() {
        const newCounter = counter + 1;
        setCounter(newCounter);
        setTotal((amount) => amount + price);
    }

    function AddToCart() {
        const item = {
            product: {
                id, name, image, price, quantity: counter, observation
            },
            additional
        }
        const addItem = [...cartProducts, item];
        setCartProducts(addItem);
    }
    return (
        <DetailContainer>
            <DetailBox>
                <h1>Revise seu pedido!</h1>
                <DetailItem>
                    <p className="close" onClick={() => setSelected(false)}>X</p>
                    <div className="image-box">
                        <img src={image} />
                        <div className="image-box-bottom"></div>
                    </div>
                    <div className="description-box">
                        <p className="name">{name}</p>
                        <p className="description-text">{description}</p>
                        <CounterButton>
                            <button onClick={minus}><p>-</p></button>
                            <div>{counter}</div>
                            <button onClick={plus}><p>+</p></button>
                        </CounterButton>
                    </div>
                    <div className="price"><p>{CurrencyConversion(price)}</p></div>
                </DetailItem>

                <AdditionalContainer>
                    <h2>Adicionais</h2>
                    <p>Selecione os ingredientes que você deseja adicionar a mais no seu lanche.</p>
                    {sideDishes.map(sideD => (
                        <div className="additional-box">
                            <div className="additional-image">
                                <img src={sideD.image} />
                            </div>
                            <div className="additional-description">
                                <div className="additional-name">{sideD.name}</div>
                                <div className="additional-text">{sideD.description}</div>
                            </div>
                            <div className="additional-price-box">
                                <div className="additional-price">{CurrencyConversion(sideD.price)}</div>
                                <button className={additional.some(product => product.name === sideD.name) ? "selected" : ""}
                                    onClick={() => AdditionalToggle(sideD.name, sideD.price, additional, setAdditional)}></button>
                            </div>
                        </div>
                    ))}
                </AdditionalContainer>

                <ObservationContainer>
                    <h2>Observações</h2>
                    <textarea className="observation-box" placeholder="Adicione uma observação ao pedido"
                        onChange={(e) => setObservation(e.target.value)}></textarea>
                </ObservationContainer>

                <SummaryContainer>
                    <div className="summary-details">
                        <p>{counter}x {name}</p>
                        <p>{CurrencyConversion(counter * price)}</p>
                    </div>
                    {additional.map(add =>
                        <div className="summary-details">
                            <p>1x {add.name}</p>
                            <p>{CurrencyConversion(add.price)}</p>
                        </div>
                    )}
                    <div className="dashed-line"></div>
                    <p>Total do pedido:</p>
                    <div className="total">{SubtotalCalculation(counter, price, additional)}</div>
                </SummaryContainer>

                <ButtonBoxDetails>
                    <button onClick={() => setSelected(false)}>Cancelar</button>
                    <button onClick={AddToCart}>Adicionar ao carrinho</button>
                </ButtonBoxDetails>
            </DetailBox>
        </DetailContainer>
    )
}