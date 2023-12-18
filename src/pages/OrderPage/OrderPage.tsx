/// <reference types="node" />
import { useContext, useEffect } from "react";
import Category from "../../components/Category/Category";
import FinalizeOrder from "../../components/FinalizeOrder/FinalizeOrder";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, Loading, OrderContainer, ProductsContainer, Subtitle, Title } from "./style";
import axios from "axios";
import { ProductContext } from "../../context/products";
import ProductDetail from "../../components/ ProductDetails/ ProductDetails";
import { ProductType } from "../../protocols";

export default function Order() {

    const { categories, setCategories, products, setProducts, setSideDishes, selected, selectedProduct } = useContext(ProductContext);

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

    if (products === undefined || products.length === 0) {
        return <Loading src="https://media.tenor.com/t5DMW5PI8mgAAAAi/loading-green-loading.gif"></Loading>;
    }

    return (
        <OrderContainer>
            {selected && (
                <ProductDetail {...selectedProduct as ProductType} />
            )}
            <Search></Search>

            <Title>Categorias</Title>
            <Subtitle>Navegue por categoria</Subtitle>
            <CategoriesContainer>
                {categories.map((cat, i) => <Category key={i} {...cat} />)}
            </CategoriesContainer>

            <Title>Produtos</Title>

            <Subtitle>Selecione um produto para adicionar ao seu pedido</Subtitle>

            {<ProductsContainer>
                {products.map((prod, i) => <Product key={i} {...prod} />)}
            </ProductsContainer>}

            <FinalizeOrder></FinalizeOrder>
        </OrderContainer>
    )
}