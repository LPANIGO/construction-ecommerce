import ItemCount from "../components/ItemCount"
import { useContext } from "react"
import { context } from "../context/myContext";


const ItemDetail = ({producto}) => {
    
    // const [name, setName] = useState("");
    const {addProduct} = useContext(context)

    const handleClick = (counter) => {
        addProduct(producto, counter);
    }

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     if (e.target.value !== "") {
    //         setName(e.target.name);
    //         console.log(name);
    //     }        
    // }

    // const handleFocus = () => {
    //     console.log("Focus");
    // }

    // const handleBlur = () => {
    //     console.log("Blur");
    // }
    return (
        <>
            <div className="itemDetail__img">
                <img src={`${process.env.PUBLIC_URL}/images/${producto.category}/${producto.img}`} alt="placeholder"></img>
            </div>
            <div className="itemDetail__info">
                <h3 className="titulo">{producto.title}</h3>
                <p>$ {producto.price}</p>
                <ItemCount initial="1" onAdd={handleClick}/>
            </div>
            {/* <div className="descripcion">
                <p>Descripción</p>
                <input type="text" name="userName" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
            </div> */}
        
        </>
        
    )
}
export default ItemDetail