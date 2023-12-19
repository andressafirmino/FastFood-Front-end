import styled from "styled-components";
import { SiVerizon } from "react-icons/si";
import { FiCheck } from "react-icons/fi";

export const KitchenContainer = styled.div`
    width: 1350px;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .status {
        width: 45%;
        height: 100%;
        font-size: 40px;
        font-weight: 700;   
        margin-bottom: 20px;
    }    
`
export const OrderBox = styled.div `
    width: 80%;
    height: 120px;
    box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.13);
    padding: 15px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;

    img {
        width: 90px;
        margin-right: 20px;
    }

    .client-data {
        font-size: 20px;
        font-weight: 700;
        margin-top: 20px;
    }

    .order-data {
        font-size: 15px;
        font-weight: 200;
        margin-top: 10px;
    }
`
export const CheckStyle = styled.button`
    width: 50px;
    height: 50px;
    background-color: #e5f5e6;    
    border-radius: 10px;
    border: none;

    svg {
        font-size: 30px;
        color: #00a006;
    }
    
   
`