import { WithdrawalContainer } from "./style";

export default function Withdrawal() {
    return (
        <WithdrawalContainer>
            <div className="height-total status">
                <p >Preparando:</p>
                <p className="client-name">Ricardo</p>
                <p className="client-name">Ricardo</p>
                <p className="client-name">Ricardo</p>
            </div>

            <div className="height-total solid-line">
            </div>

            <div className="height-total status">
                <p >Pronto:</p>
                <p className="client-name">Ricardo</p>
            </div>

        </WithdrawalContainer>
    )
}