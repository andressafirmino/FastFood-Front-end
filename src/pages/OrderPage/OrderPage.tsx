/// <reference types="node" />
import { useEffect } from "react";
import Category from "../../components/Category/Category";
import FinalizeOrder from "../../components/FinalizeOrder/FinalizeOrder";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, OrderContainer, ProductsContainer, Subtitle, Title } from "./style";
import axios from "axios";

export default function Order() {

    const products = [
       
        {
            name: 'Combo x-burguer',
            price: 4400,
            description: '1 x-buguer, 1 batata-frita pequena e um refrigerante de 350ml',
            image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
            category: 'COMBO',
        },

    ]
    useEffect(() => {        
        const url = `${import.meta.env.VITE_API_URL}/`;
        axios.get(url)
            .then(response => console.log(response.data))
            .catch(e => console.log(e.message))
    }, []);
    return (
        <OrderContainer>
            <Search></Search>

            <Title>Categorias</Title>
            <Subtitle>Navegue por categoria</Subtitle>
            <CategoriesContainer>
                <Category></Category>
            </CategoriesContainer>

            <Title>Produtos</Title>

            <Subtitle>Selecione um produto para adicionar ao seu pedido</Subtitle>

            {<ProductsContainer>
                {products.map((prod, i)=> <Product key={i} {...prod} />)}
            </ProductsContainer>}

            <FinalizeOrder></FinalizeOrder>
        </OrderContainer>
    )
}