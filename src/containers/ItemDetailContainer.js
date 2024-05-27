import { useState, useEffect } from "react"
import ItemDetail from "../pages/ItemDetail"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";
import initialproductos from "../assets/productsInfo";

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState({});
    const {id} = useParams()

    useEffect( () => {
        window.scrollTo(0, 0);
        new Promise ((res, rej) => {
            setTimeout( () => {
                res(initialproductos)
            }, 500)
        })
        .then( (content) => {
            const resultado = initialproductos.filter((producto) => {
                // console.log(parseInt(id))
                return producto.id === parseInt(id)
            })[0]
            setProducto(resultado)
            setCargando(false)
        })
        .catch( (error) => {
            console.log("Smth went wrong.")
        })
    }, [])

    
    return (
        <>
        {cargando ? 
        <div  className="itemDetailContainerLoader">
            <ScaleLoader color="#bf071f"/>
            <p className="loadingP">Cargando detalle del producto... </p>
        </div> : 
        <div className="itemDetailContainer">
            <ItemDetail className="itemDetail" producto={producto}/>
        </div>  }
        </>
        
    )
    
}
export default ItemDetailContainer