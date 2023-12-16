import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { CategoriesContainer, OrderContainer, ProductsContainer, Subtitle, Title } from "./style";

export default function Order() {

    const products = [
        {
            name: 'X-burguer',
            price: 3400,
            description: 'Hambúguer, pão, cebola, queijo, alface e tomate',
            image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
            category: 'SNACK',
        },
        {
            name: 'Coca-cola',
            price: 400,
            description: '350 ml',
            image:
                'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/texaslanches/141_5870274644f2a.png',
            category: 'DRINK',
        },
        {
            name: 'Combo x-burguer',
            price: 4400,
            description: '1 x-buguer, 1 batata-frita pequena e um refrigerante de 350ml',
            image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
            category: 'COMBO',
        },
        {
            name: 'Pudim',
            price: 1000,
            description: 'Pudim de doce de leite',
            image: 'https://static.vecteezy.com/system/resources/previews/021/216/948/original/condensed-milk-pudding-with-eggs-png.png',
            category: 'DESSERT',
        },
        {
            name: 'X-burguer',
            price: 3400,
            description: 'Hambúguer, pão, cebola, queijo, alface e tomate',
            image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
            category: 'SNACK',
        },
        {
            name: 'Coca-cola',
            price: 400,
            description: '350 ml',
            image:
                'https://w7.pngwing.com/pngs/922/962/png-transparent-coca-cola-fizzy-drinks-diet-coke-fanta-coca-cola-cola-cola-wars-aluminum-can.png',
            category: 'DRINK',
        },
        {
            name: 'Combo x-burguer',
            price: 4400,
            description: '1 x-buguer, 1 batata-frita pequena e um refrigerante de 350ml',
            image: 'https://static.vecteezy.com/system/resources/previews/022/598/800/non_2x/tasty-beef-burger-png.png',
            category: 'COMBO',
        },

    ]

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

            <ProductsContainer>
                {products.map(props => <Product props={props} />)}
            </ProductsContainer>
        </OrderContainer>
    )
}