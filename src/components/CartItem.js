import { memo } from "react"
import CartItemCount from "../components/CartItemCount"

const CarritoItem = ({d, e}) => {
    console.log("Render item")
    const deleteAll = () => {
        d(e.id);
    }

    return (
        <div className="cartItem">
            <img src={`${process.env.PUBLIC_URL}/images/${e.category}/${e.img}`} alt=""/>
            <p className="itemName">{e.name}</p>
            <CartItemCount quantity={e.quantity}/>
            <p>${e.price * e.quantity}</p>
            <span className="material-icons trashBin" onClick={deleteAll}>delete</span>
        </div>
    )
}
export default memo(CarritoItem)