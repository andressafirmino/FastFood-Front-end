import CurrencyConversion from "./CurrencyConversion";

export default function SubtotalCalculation(counter: number, price: number, additional: any[]) {
    let addTotal = 0;
    additional.map(add =>
        addTotal += add.price
    )
    return CurrencyConversion(counter * price + addTotal);
}