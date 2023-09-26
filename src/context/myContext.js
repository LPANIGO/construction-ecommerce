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
            //2 MODIFICAR EL MODAL PARA QUE TENGA OPCION DE EXIT
            setTotalPrice((prevPrice) =>  prevPrice + (product.price*quantity) )
            setTotalQuantity((prevQuantity) =>  prevQuantity + quantity)
            setCart((prevCart) => [...prevCart, newProduct])
        }    
    }

    const deleteProduct = (id) => {
        const updatedCart = cart.filter( (e) =>  id !== e.id )
        setCart(updatedCart);
    }

    const emptyCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    }

    const isInCart = (id) => {
        return !!cart.find( e => e.id === id);
    }

    const contextValue = {
        total_quantity,
        total_price,
        cart,
        addProduct,
        deleteProduct,
        emptyCart,
        isInCart        
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default MyCustomProvider