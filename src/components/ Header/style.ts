import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 40px;
    background-color: #125c13;
    padding: 7px;

    display: flex;
    justify-content: space-between;
`
export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
   img {
    width: 25px;
    height: auto; 
    margin-right: 5px;
   }
   p {
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
   }
`

export const HeaderLinks = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        width: 90px;
        height: 25px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#FFFFFF;
        background-color: #125c13;
       
        &.selected {
            background-color: #0c400d;
        }

        p {
            font-size: 15px;
            font-weight: 400;
            color: inherit;
        }
    }
`