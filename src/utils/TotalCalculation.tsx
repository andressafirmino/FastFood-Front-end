export default function TotalCalculation(counter: number, price: number, additional: any[]) {
    let addTotal = 0;
    additional.map(add =>
        addTotal += add.price
    )
    return (counter * price + addTotal);
}