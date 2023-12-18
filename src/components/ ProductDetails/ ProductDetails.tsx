import { ProductType } from "../../protocols";
import CurrencyConversion from "../../utils/CurrencyConversion";
import { AdditionalContainer, ButtonBoxDetails, CounterButton, DetailBox, DetailContainer, DetailItem, ObservationContainer, SummaryContainer } from "./style";

export default function ProductDetail({ name, image, description, price }: ProductType) {

    return (
        <DetailContainer>
            <DetailBox>
                <h1>Revise seu pedido!</h1>
                <DetailItem>
                    <p className="close">X</p>
                    <div className="image-box">
                        <img src={image} />
                        <div className="image-box-bottom"></div>
                    </div>
                    <div className="description-box">
                        <p className="name">{name}</p>
                        <p className="description-text">{description}</p>
                        <CounterButton>
                            <button><p>-</p></button>
                            <div>1</div>
                            <button><p>+</p></button>
                        </CounterButton>
                    </div>
                    <div className="price"><p>{CurrencyConversion(price)}</p></div>
                </DetailItem>
                <AdditionalContainer>
                    <h2>Adicionais</h2>
                    <p>Selecione os ingredientes que você deseja adicionar a mais no seu lanche.</p>
                    <div className="additional-box">
                        <div className="additional-image">
                            <img src="https://i.pinimg.com/originals/4f/3e/e2/4f3ee2cb7508b3edee542b2218635fb1.png" />
                        </div>
                        <div className="additional-description">
                            <div className="additional-name">Barbecue</div>
                            <div className="additional-text">10g</div>
                        </div>
                        <div className="additional-price-box">
                            <div className="additional-price">1,00</div>
                            <button></button>
                        </div>
                    </div>
                </AdditionalContainer>
                <ObservationContainer>
                    <h2>Observações</h2>
                    <textarea className="observation-box" placeholder="Adicione uma observação ao pedido"></textarea>
                </ObservationContainer>
                <SummaryContainer>
                    <div className="summary-details">
                        <p>1x {name}</p>
                        <p>{CurrencyConversion(price)}</p>
                    </div>
                    <div className="dashed-line"></div>
                    <p>Total do pedido:</p>
                    <div className="total">{CurrencyConversion(price)}</div>
                </SummaryContainer>
                <ButtonBoxDetails>
                    <button>Cancelar</button>
                    <button>Adicionar ao carrinho</button>
                </ButtonBoxDetails>
            </DetailBox>
        </DetailContainer>
    )
}