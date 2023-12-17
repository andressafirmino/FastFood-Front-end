/// <reference types="node" />
import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import FinalizeOrder from "../../components/FinalizeOrder/FinalizeOrder";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, OrderContainer, ProductsContainer, Subtitle, Title } from "./style";
import axios from "axios";
import { CategoryType, ProductType } from "../../protocols";

export default function Order() {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sideDishes, setSideDishes] = useState([]);
   
    useEffect(() => {        
        const url = `${import.meta.env.VITE_API_URL}/`;
        axios.get(url)
            .then(response => {
                setCategories(response.data.categories);
                setProducts(response.data.products);
                setSideDishes(response.data.sideDish)
            })
            .catch(e => console.log(e.message))
    }, []);

    if(products.length === 0) {
        return <p>Carregando</p>;
    }

    return (
        <OrderContainer>
            <Search></Search>

            <Title>Categorias</Title>
            <Subtitle>Navegue por categoria</Subtitle>
            <CategoriesContainer>
                {categories.map((cat, i) => <Category key={i} {...cat}/>)}
                
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