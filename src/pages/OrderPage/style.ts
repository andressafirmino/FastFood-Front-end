import styled from "styled-components";

export const OrderContainer = styled.div`
    width: 900px;
    height: calc(100vh - 40px);
    margin: 60px auto 0;
    padding-left: 16px;
`
export const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
`
export const Subtitle = styled.p`
    font-size: 15px;
    font-weight: 200;
    color: #000000;
    margin-bottom: 30px;
`

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-right: 20px;
`
export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div:nth-child(4n) {
        margin-right: 0;
    }
`
export const Loading = styled.img `
    width: 30%; 
    display: block;
    margin: 100px auto;
`