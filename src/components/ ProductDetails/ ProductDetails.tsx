import { AdditionalContainer, CounterButton, DetailBox, DetailContainer, DetailItem, ObservationContainer } from "./style";

export default function ProductDetail() {
    return (
        <DetailContainer>
            <DetailBox>
                <h1>Revise seu pedido!</h1>
                <DetailItem>
                    <div className="image-box">
                        <img src="https://static.vecteezy.com/system/resources/previews/021/217/130/original/petit-gateau-dessert-png.png" />
                        <div className="image-box-bottom"></div>
                    </div>
                    <div className="description-box">
                        <p className="name">X-burguer</p>
                        <p className="description-text">2 hambugueres, queijo, cheddar, tomate, alface</p>
                        <CounterButton>
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </CounterButton>
                    </div>
                    <div className="price"><p>30,00</p></div>
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
            </DetailBox>
        </DetailContainer>
    )
}