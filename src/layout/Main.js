import ItemListContainer from "../containers/ItemListContainer"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import Carrousel from "../components/Carrousel"
import { Routes, Route, useLocation } from "react-router-dom"
import Cart from "../pages/Cart"
import ContactUs from "../pages/ContactUs"

const Main = () => {
    const location = useLocation();

    return (
        <>
        {location.pathname === "/" && <Carrousel/>}
        {location.pathname === "/construction-ecommerce" && <Carrousel/>}
        {location.pathname === "/construction-ecommerce/" && <Carrousel/>}
        <main className="main">
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/construction-ecommerce" element={<ItemListContainer/>}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListContainer/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
            
            {/*
            <ItemListCointainer/>
            <ItemDetailContainer/> */}
            <a href="https://wa.me/<number>" className="wp">
			    <img src={`${process.env.PUBLIC_URL}/images/whatsapp-logo.png`} alt="Whats app link"/>
            </a>
        </main>
        
        </>       
    )
}
export default Main