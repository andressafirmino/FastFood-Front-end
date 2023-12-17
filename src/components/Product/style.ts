import styled from "styled-components";
import Cutlery from '../../assets/cutlery.png';

export const ProductContainer = styled.div`
    width: 172px;
    height:216px;
    border-radius: 15px;
    background-color: aquamarine;
    margin-right: 60px;
    margin-bottom: 30px;
    position: relative;
    background-color: #125c13;
    box-shadow: 0px 4px 6px 0px #0000000D;

    /* background-image: url(${Cutlery});
    background-size: cover; 
    background-position: center; */
    
    .img {
        width: 172px;
        height: 87px;
        position: absolute;
        bottom: 120px;
        left: 0;
        display: flex;
        justify-content: center;
        z-index: 1;
    }
    .information {
    width: 172px;
    height:151px;
    border-radius: 15px;    
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 30px;

    position: absolute;
    bottom: 0;
    left: 0;

    .price {
        margin: 18px 0;
        font-size: 17px;
        font-weight: 600;
    }

    .description {
        width: 150px;
        height: 60px;
        font-size: 10px;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name {
        font-size: 15px;
        font-weight: 500;
        margin-top: 10px;
    }
    }
`