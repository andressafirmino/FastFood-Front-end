import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 172px;
    height:151px;
    border-radius: 15px;  
    box-shadow: 0px 4px 4px 4px #0000000D;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .name {
        margin: 18px 0;
        font-size: 17px;
        font-weight: 600;
    }
    img {
        width: auto;
        height: 87px;
        display: flex;
        justify-content: center;
    }
`