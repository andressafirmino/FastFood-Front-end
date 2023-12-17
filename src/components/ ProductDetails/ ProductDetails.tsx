import { CounterButton, DetailBox, DetailContainer, DetailItem } from "./style";

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
            </DetailBox>
        </DetailContainer>
    )
}