import { OrderTotalSummaryContainer } from "../OrderTotalSummary/style";
import { ButtonPayment, FormPayment, FormPaymentContainer, PaymentContainer, WalletIconStyle } from "./style";
import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import OrdemCompleted from "../OrderCompleted/OrderCompleted";
import Summary from "../Summary/Summary";
import { useState } from "react";

export default function Payment() {
    const [name, setName] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
    console.log(paymentMethod)
    function togglePaymentMethod(method: string) {
        if (paymentMethod.includes(method)) {
            const newMethod = [...paymentMethod];
            
            let position = newMethod.findIndex(met => met === method);
            newMethod.splice(position, 1);
            setPaymentMethod(newMethod);
        } else {
            if(paymentMethod.length < 2) {
                const addMethod = [...paymentMethod, method];
                setPaymentMethod(addMethod);
            }           
        }
    }
    return (
        <PaymentContainer>
            {/* <OrdemCompleted /> */}
            <div className="payment">
                <WalletIconStyle />
                <p>Pagamento</p>
            </div>

            <div className="payment-box">
                <div className="payment-block">
                    <p className="subtitle">Resumo da compra</p>
                    <OrderTotalSummaryContainer>
                        <Summary />
                    </OrderTotalSummaryContainer>

                    <div className="client-data">
                        <div className="client-data-input">
                            <p className="subtitle">Nome do cliente:</p>
                            <input placeholder="Primeiro nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="client-data-code">
                            <p className="subtitle">Código</p>
                            <div className="code">123</div>
                        </div>
                    </div>
                </div>

                <div className="payment-block">
                    <p className="subtitle">Selecione a forma de pagamento:</p>
                    <FormPaymentContainer>
                        <FormPayment>
                            <div className="payment-box">
                                <FaCreditCard />
                                <p>Débito</p>
                            </div>
                            <button onClick={() => togglePaymentMethod("debit")} 
                            className={paymentMethod.includes("debit") ? "selected" : ""}></button>
                        </FormPayment>
                        <FormPayment>
                            <div className="payment-box">
                                <FaCreditCard />
                                <p>Crédito</p>
                            </div>
                            <button onClick={() => togglePaymentMethod("credit")}
                            className={paymentMethod.includes("credit") ? "selected" : ""}></button>
                        </FormPayment>
                        <FormPayment>
                            <div className="payment-box">
                                <FaMoneyBillAlt />
                                <p>Dinheiro</p>
                            </div>
                            <button onClick={() => togglePaymentMethod("money")}
                            className={paymentMethod.includes("money") ? "selected" : ""}></button>
                        </FormPayment>
                        <div className="payment-data">
                            <div className="payment-data-input">
                                <p className="subtitle">Valor entregue:</p>
                                <input />
                            </div>
                            <div className="payment-data-input">
                                <p className="subtitle">Troco</p>
                                <div></div>
                            </div>
                        </div>
                    </FormPaymentContainer>
                </div>
            </div>
            <ButtonPayment>
                <button >Cancelar</button>
                <button >Finalizar pedido</button>
            </ButtonPayment>
        </PaymentContainer>
    )
}