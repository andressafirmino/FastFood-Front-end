import { OrderTotalSummaryContainer } from "../OrderTotalSummary/style";
import { ButtonPayment, FormPayment, FormPaymentContainer, PaymentContainer, WalletIconStyle } from "./style";
import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import OrdemCompleted from "../OrderCompleted/OrderCompleted";
import Summary from "../Summary/Summary";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products";
import TogglePaymentMethod from "../../utils/TogglePaymentMethod";

export default function Payment() {
    const { total } = useContext(ProductContext);
    const [name, setName] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
    const [cashPayment, setCashPayment] = useState<string>();
    const [cashback, setCashBack] = useState<string>("");
    const [finish, setFinish] = useState<boolean>(false);


    function checkString(value: string) {
        const match = value.match(/^(\d+([,])?\d{0,2})?/);

        if (match) {
            const numericValue = match[0].replace(/[^\d,]/g, '');
            setCashPayment(numericValue);
        }
    }

    function calculationCashback() {
        const cash = (typeof cashPayment === "string" ? parseFloat(cashPayment.replace(',', '.')) : 0);
        const cashInCents = 100 * cash;
        if (cashInCents > total) {
            const valueCashBack = (((cashInCents - total) / 100).toFixed(2)).toString().replace('.', ',')
            setCashBack("R$ " + valueCashBack);
        } else {
            setCashBack("");
        }
    }
    function canFinish() {
        const cash = (typeof cashPayment === "string" ? parseFloat(cashPayment.replace(',', '.')) : 0);
        const cashInCents = 100 * cash;
        console.log(name);
        console.log(paymentMethod);
        console.log(cashInCents < total);
        if (name === "" || (paymentMethod.length === 0 || (paymentMethod.includes("money") && cashInCents < total))) {
            setFinish(false);
        } else {
            setFinish(true);
        }

    }
    useEffect(() => {
        canFinish();
        calculationCashback();
    }, [name,paymentMethod,cashPayment ]);
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
                            <button onClick={() => TogglePaymentMethod("debit", paymentMethod, setPaymentMethod)}
                                className={paymentMethod.includes("debit") ? "selected" : ""}></button>
                        </FormPayment>
                        <FormPayment>
                            <div className="payment-box">
                                <FaCreditCard />
                                <p>Crédito</p>
                            </div>
                            <button onClick={() => TogglePaymentMethod("credit", paymentMethod, setPaymentMethod)}
                                className={paymentMethod.includes("credit") ? "selected" : ""}></button>
                        </FormPayment>
                        <FormPayment>
                            <div className="payment-box">
                                <FaMoneyBillAlt />
                                <p>Dinheiro</p>
                            </div>
                            <button onClick={() => TogglePaymentMethod("money", paymentMethod, setPaymentMethod)}
                                className={paymentMethod.includes("money") ? "selected" : ""}></button>
                        </FormPayment>
                        {paymentMethod.includes("money") && (
                            <div className="payment-data">
                                <div className="payment-data-input">
                                    <p className="subtitle">Valor entregue:</p>
                                    <div>
                                        <p>R$</p>
                                        <input type="text" value={cashPayment}
                                            onChange={e => checkString(e.target.value)}
                                            inputMode="numeric" />
                                    </div>

                                </div>
                                <div className="payment-data-input">
                                    <p className="subtitle">Troco</p>
                                    <div>{cashback}</div>
                                </div>
                            </div>
                        )}
                    </FormPaymentContainer>
                </div>
            </div>
            <ButtonPayment>
                <button className={finish ? "selected" : ""}>Cancelar</button>
                <button className={finish ? "selected" : ""}>Finalizar pedido</button>
            </ButtonPayment>
        </PaymentContainer>
    )
}