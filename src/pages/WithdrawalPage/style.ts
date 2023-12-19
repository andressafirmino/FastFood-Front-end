import styled from "styled-components";

export const WithdrawalContainer = styled.div`
    width: 1350px;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .height-total {
        height: 100%;
    }
    .status {
        width: 45%;
        height: 100%;
        font-size: 40px;
        font-weight: 700;     
    }    

    .solid-line {
            height: 100%;
            border: 2px solid #000000;   
            margin: 0 20px;     
        }

    .client-name {
        font-size: 70px;
        font-weight: 700;
        color: #9f9f9f;
        margin-top: 50px;
    }
`