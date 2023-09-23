import {Link} from "react-router-dom"
import { useContext } from "react"
import { context } from "../context/myContext";

const CartWidget = () => {

    const {total_quantity} = useContext(context);

    return (
        <Link to="/cart">
        <span className="material-icons cart-widget">shopping_cart</span>
        {total_quantity}
        </Link>
        
    )
}
export default CartWidget