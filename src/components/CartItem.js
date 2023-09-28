import { memo } from "react"
import CartItemCount from "../components/CartItemCount"

const CarritoItem = ({e, d, du, au}) => {
    console.log("Render item")
    const deleteItems = () => {
        d(e.id);
    }

    const deleteOneItem = () => {
        du(e.id);
    }

    const addOneItem = () => {
        au(e.id);
    }
    return (
        <div className="cartItem">
            <img src={`${process.env.PUBLIC_URL}/images/${e.category}/${e.img}`} alt=""/>
            <p className="itemName">{e.name}</p>
            <CartItemCount quantity={e.quantity} deleteOne={deleteOneItem} addOne={addOneItem}/>
            <p>${e.price * e.quantity}</p>
            <span className="material-icons trashBin" onClick={deleteItems}>delete</span>
        </div>
    )
}
export default memo(CarritoItem)