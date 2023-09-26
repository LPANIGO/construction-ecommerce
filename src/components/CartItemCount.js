import { useState } from "react"

const CartItemCount = ({quantity}) => {

    const[counter, setCounter] = useState(parseInt(quantity));
    
    const add = () => {
        setCounter(counter+1);     
    }
    
    const subtract = () => {
        if ( counter > 1) {
            setCounter(counter-1);
        }
    }

    return (
        <div className="cartItemCount">
            <button type="button" onClick={subtract}>-</button>
            <p className="counter">{counter}</p>
            <button type="button" onClick={add}>+</button>
        </div>
    )
}
export default CartItemCount