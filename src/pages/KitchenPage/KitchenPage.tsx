import { CheckStyle, KitchenContainer, OrderBox } from "./style";
import { FiCheck } from "react-icons/fi";

export default function Kitchen() {
    return (
        <KitchenContainer>

            <div className="status">
                <p>Preparando:</p>
                <OrderBox>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png" />
                    <div>
                        <p className="client-data">123 - Ricardo</p>
                        <p className="order-data">1x x-burguer</p>
                    </div>

                    <CheckStyle>
                        <FiCheck />
                    </CheckStyle>
                </OrderBox>
            </div>


            <div className="status">Pronto:</div>
        </KitchenContainer>
    )
}