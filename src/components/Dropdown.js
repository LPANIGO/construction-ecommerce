import { Link } from "react-router-dom";
import { useState } from "react";


const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const closeDropdown = () => {
        setIsOpen(false);
    }

    return (
        <>
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                <div id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span> 
                </div>
                <p>CATEGORÍAS</p>
            </button>
            
            <ul className={`mydropdown ${isOpen && "open"}`}>
                <li className="li1"><Link to="/productos/baños" className="category" onClick={closeDropdown}>BAÑOS</Link></li>
                <li className="li2"><Link to="/productos/cocina" className="category" onClick={closeDropdown}>COCINA</Link></li>
                <li className="li3"><Link to="/productos/griferia" className="category" onClick={closeDropdown}>GRIFERÍA</Link></li>
                <li className="li4"><Link to="/productos/hogares" className="category" onClick={closeDropdown}>HOGARES</Link></li> 
                <li className="li5"><Link to="/productos/pisosyrevestimientos" className="category" onClick={closeDropdown}>PISOS Y REVESTIMIENTOS</Link></li> 
                <li className="li6"><Link to="/productos/tejas" className="category" onClick={closeDropdown}>TEJAS</Link></li>         
            </ul>
            

        </div>
        
        </>
    )
}
export default Dropdown