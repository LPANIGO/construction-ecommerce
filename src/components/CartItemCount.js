const CartItemCount = ({quantity}) => {
    return (
        <div className="cartItemCount">
            <button type="button" className="bd">-</button>
            <p className="counter">{quantity}</p>
            <button type="button" className="">+</button>
        </div>
    )
}
export default CartItemCount