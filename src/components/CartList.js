import CartItem from "./CartItem"
import { memo } from "react";

const CartList = ({cart}) => {


    console.log(cart)
    return (
        <ul className="cartList">
            {cart.map( (e)=>{
                return <CartItem className="cartItem" key={e.id} e={e}/>
            })}
            <li></li>
        </ul>
        // <ul>
        //     {usuarios.map(usuario => {
        //         return <CarritoItem key={cont++} usuario={usuario}/>
        //     })}
        // </ul>
    )
}
export default memo(CartList)