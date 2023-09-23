import ItemListCointainer from "../containers/ItemListContainer"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import Carrousel from "../components/Carrousel"
import { Routes, Route, useLocation } from "react-router-dom"
import Cart from "../pages/Cart"

const Main = () => {
    const location = useLocation();

    return (
        <>
        {location.pathname === "/" && <Carrousel/>}
        {location.pathname === "/construction-ecommerce" && <Carrousel/>}
        <main className="main">
            
            <Routes>
                <Route path="/" element={<ItemListCointainer/>}/>
                <Route path="/construction-ecommerce" element={<ItemListCointainer/>}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListCointainer/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            
            {/*
            <ItemListCointainer/>
            <ItemDetailContainer/> */}
        </main>
        </>       
    )
}
export default Main