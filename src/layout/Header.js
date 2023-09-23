import CartWidget from "../components/CartWidget"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">LOGO EMPRESA</Link>
            <CartWidget/>
        </header>  
    )
}
export default Header