import { HeaderContainer, HeaderLinks, HeaderLogo } from "./style";
import Logo from '../../assets/Logo.png';
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();
    return (
        <HeaderContainer>
            <HeaderLogo >
                <img src={Logo} />
                <Link to="/"><p>fastfood</p></Link>
            </HeaderLogo>
            <HeaderLinks>
                <div><Link to="/" className={location.pathname === '/' ? 'selected' : ''}><p>Pedidos</p></Link></div>
                <div><Link to="/cozinha" className={location.pathname === '/cozinha' ? 'selected' : ''}><p>Cozinha</p></Link></div>
                <div><Link to="/retirada" className={location.pathname === '/retirada' ? 'selected' : ''}><p>Retirada</p></Link></div>
            </HeaderLinks>
        </HeaderContainer>
    )
}