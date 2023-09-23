import {Link, NavLink} from "react-router-dom"
import Dropdown from "../components/Dropdown"

const NavBar = () => {
    return (
    <nav className="nav">
        <Dropdown/>
        <Link to="/" className="nav__link">CONTACTO</Link>
        <NavLink to="/" className="nav__link">OFERTAS</NavLink> 
        <Link to="/" className="nav__link">NOSOTROS</Link> 
        <Link to="/cart" className="nav__link cartLink">MI CARRITO</Link>
    </nav>
    )
}
export default NavBar