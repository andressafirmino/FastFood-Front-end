import { Dispatch, SetStateAction } from "react";

export default function AdditionalToggle(name: string, price: number, additional: any[], setAdditional: Dispatch<SetStateAction<any[]>>) {
    if (additional.some(product => product.name === name)) {
        const removeToAdditional = additional.filter(product => product.name !== name);
        return setAdditional(removeToAdditional)
    } else {
        const addToAdditional = [...additional, { name, price }];
        return setAdditional(addToAdditional)
    }
}