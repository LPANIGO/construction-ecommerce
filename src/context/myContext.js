import { createContext, useState } from "react";

export const context = createContext({});
const {/*Consumer,*/ Provider} = context;

const MyCustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total_quantity, setTotalQuantity] = useState(0);
    const [total_price, setTotalPrice] = useState(0);

    const addProduct = (product, quantity) => {

        if (isInCart(product.id)) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + quantity}
                }
                return item;
            })
            setTotalPrice((prevPrice) =>  prevPrice + (product.price*quantity) )
            setTotalQuantity((prevQuantity) =>  prevQuantity + quantity)
            setCart(updatedCart);
        }else {
            const newProduct = {
                id: product.id,
                name: product.title,
                price: product.price,
                quantity: quantity,
                category: product.category,
                img: product.img
                
            }
            setTotalPrice((prevPrice) =>  prevPrice + (product.price*quantity) )
            setTotalQuantity((prevQuantity) =>  prevQuantity + quantity)
            setCart((prevCart) => [...prevCart, newProduct])
        }    
    }

    const isInCart = (id) => {
        return !!cart.find( e => e.id === id);
    }

    const deleteProduct = (id) => {
        let deletedProduct = {};
        for( let e of cart){
            if(id === e.id){
                deletedProduct = e;
            }
        }
        let newCart = cart.filter( e => e.id !== id);
        const substractedQuantity = deletedProduct.quantity;
        const substractedAmount = deletedProduct.price * substractedQuantity;

        setTotalQuantity((total_quantity) => total_quantity - substractedQuantity);
        setTotalPrice((total_price) => total_price - substractedAmount);
        setCart(newCart);
    }

    const deleteUnit = (id) => {
        let substractedAmount = 0;
        let newCart = cart.map( e => {
            if (e.id === id) {
                e.quantity -= 1
                substractedAmount = e.price;
            }   
            return e;
        })
        setTotalQuantity((total_quantity) => total_quantity -= 1);
        setTotalPrice((total_price) => total_price - substractedAmount);
        setCart(newCart);
    }

    const addUnit = (id) => {
        let addedAmount = 0;
        let newCart = cart.map( e => {
            if (e.id === id) {
                e.quantity += 1;
                addedAmount = e.price;
            } 
            return e;
        })
        setTotalQuantity((total_quantity) => total_quantity += 1);
        setTotalPrice((total_price) => total_price + addedAmount);
        setCart(newCart);
    }

    const emptyCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    }

    const contextValue = {
        total_quantity,
        total_price,
        cart,
        addProduct,
        deleteProduct,
        emptyCart,
        deleteUnit, 
        addUnit     
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default MyCustomProvider