import { useState } from "react"

const CartItemCount = ({quantity, deleteOne, addOne}) => {

    const[counter, setCounter] = useState(parseInt(quantity));
    
    const add = () => {
        addOne();
        setCounter(counter+1);     
    }
    
    const subtract = () => {
        if ( counter > 1) {
            deleteOne();
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