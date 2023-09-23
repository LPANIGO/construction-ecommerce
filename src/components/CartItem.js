import { memo } from "react"
import CartItemCount from "../components/CartItemCount"

const CarritoItem = ({e}) => {
    console.log("Render item")
    return (
        <div className="cartItem">
            <img src={`${process.env.PUBLIC_URL}/images/${e.category}/${e.img}`} alt=""/>
            <p className="itemName">{e.name}</p>
            <CartItemCount quantity={e.quantity}/>
            <p>${e.price * e.quantity}</p>
            <span className="material-icons trashBin">delete</span>
        </div>
    )
}
export default memo(CarritoItem)