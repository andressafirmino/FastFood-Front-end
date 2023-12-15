import { HeaderContainer, HeaderLinks, HeaderLogo } from "./style";
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo >
                <img src={Logo} />
                <Link to="/"><p>fastfood</p></Link>
            </HeaderLogo>
            <HeaderLinks>
                <div><Link to="/"><p>Pedidos</p></Link></div>
                <div><Link to="/cozinha"><p>Cozinha</p></Link></div>
                <div><Link to="/retirada"><p>Retirada</p></Link></div>
            </HeaderLinks>
        </HeaderContainer>
    )
}