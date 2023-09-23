import { useState, useEffect } from "react";


const ItemCount = ({ initial, onAdd}) => {
    const [counter, setCounter] = useState(parseInt(initial)) //este hook devuelve un array con un estado y una funcion para cambiar este estado
    const [confirmed, setConfirmed] = useState(false);

    useEffect(()=>{
        // console.log("Pido detalle del producto")
    }, [confirmed])

    const add = () => {
        setCounter(counter+1);     
    }
    
    const subtract = () => {
        if ( counter > 1) {
            setCounter(counter-1);
        }
    }

    const addToCart = () => {
        onAdd(counter);
        setConfirmed(true);
        
    }

    // const handleBlur = (e) => {
    //     setCounter(e.target.value);

    //     const aux = (e.target.value);
    //     for (let i=0; i < aux.length ; i++){
    //         if(!parseInt(aux[i])) {
    //             console.log(aux[i]);
    //             setCounter(1);
                
    //             break;
    //         }
    //     }
        
        
    // }
    console.log("render")

    return (
        <>
        <div className="itemCount">
            <button type="button" className="itemCount__bt" onClick={add}>+</button>
            <button type="button" className="itemCount__bd" onClick={subtract}>-</button>
            <div className="itemCount__counter">
                <p>{counter}</p>
            </div>
            
        </div>
        <div >
            <button type="button" className="addToCartBtn" onClick={addToCart}>Agregar al carrito</button>
        </div>
        {confirmed ? <p className="modal">Se agregaron {counter} unidad/es al carrito.</p> : null}
        </>
    )
}
export default ItemCount