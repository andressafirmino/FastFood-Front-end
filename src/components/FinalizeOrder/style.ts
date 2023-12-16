import styled from "styled-components";

export const ButtonBox = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;

    button {
        width: 240px;
        height: 45px;   
        border-radius: 15px;  
        margin-left: 20px;

        &:first-child {
            color: #9f9f9f;
            background-color: #FFFFFF;
            border: 2px solid #9f9f9f;
        }

        &:last-child {
            color: #FFFFFF;
            background-color: #9f9f9f;
            border: none;
        }
        &:hover {
            cursor: pointer;
        }
    }
`