import CartItem from "./CartItem"
import { memo } from "react";
import { context } from "../context/myContext"
import { useContext } from "react";

const CartList = ({cart}) => {

    const {deleteProduct, deleteUnit, addUnit} = useContext(context);

    const handleDelete = (id) => {
        deleteProduct(id);
    }

    return (
        <ul className="cartList">
            {cart.map( (e)=>{
                return <CartItem className="cartItem" d={handleDelete} du={deleteUnit} au={addUnit} key={e.id} e={e}/>
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