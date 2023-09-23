import { useContext, useEffect } from "react";
import { context } from "../context/myContext"
import CartList from "../components/CartList";
import { PurchaseSummary } from "../components/PurchaseSummary";


const Cart = () => {

    const {total_price, cart} = useContext(context);
    // const [usuarios, setUsuarios] = useState([]);
    // const [nombre, setNombre] = useState("");
    
    // const handleClickUser = () => {
    //     setUsuarios([...usuarios,{
    //         id: parseInt((Math.random()*10)+1),
    //         nombre: nombre
    //     }])
    // }
    
    // const handleChange = (e) => {
    //     setNombre(e.target.value);
    // }

    // console.log("Render carrito")
    
    // const handleClick = () => {
    //     emptyCart();
    //     setChange(!change)
    // }
    useEffect ( () => {
        window.scrollTo(0, 0);
    },[])

    // const foo = () => {
    //     console.log("Funcion pasada por props")
    // }

    // const fooMemorizada = useCallback(foo,[]);

    return (
        <div className="cartContainer">
            <div className="cart">
                <div>
                    <h1>CARRITO</h1>
                    <hr></hr>
                </div>
                <CartList cart={cart}/>
            </div>
            <PurchaseSummary totalPrice={total_price}/>
        </div>
        
        
    )
}   
export  default Cart   

/* <h1>Carrito</h1>
        <h2>Precio total: {total_price}</h2>
        <button onClick={handleClick}>Eliminar productos</button>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClickUser}>Registrar usuario</button>
        <ListaCarrito foo={fooMemorizada} usuarios={usuarios} cart={cart}/> */