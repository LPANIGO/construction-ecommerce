import { useState, useEffect } from "react"
import ItemList from "../pages/ItemList"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom"
import initialproductos from "../assets/productsInfo";

const ItemListContainer = (props) => {

    const [productos, setproductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {nombreCategoria} = useParams()

    //productos.filter()
    /*
    Hay dos opciones:
    Traer los datos de la bbdd una vez y filtrarlos cada vez que se pida.
    Por cada pedido de filtro traer los datos de la bbdd.
    */

    useEffect( () => {
        window.scrollTo(0, 0);
        setCargando(true)
        if (nombreCategoria === undefined) {
            new Promise ((res, rej) => {
                setTimeout( () => {
                    res(initialproductos)
                }, 500)
            })
            .then( (content) => {
                setproductos(initialproductos)
                setCargando(false)
            })
            .catch( (error) => {
                console.log("Smth went wrong.")
            })
        } else {
            new Promise ((res, rej) => {
                setTimeout( () => {
                    res(initialproductos)
                }, 500)
            })
            .then( (content) => {
                const auxArr = initialproductos.filter( (e) => {return e.category === nombreCategoria})
                setproductos(auxArr)
                setCargando(false)
            })
            .catch( (error) => {
                console.log("Smth went wrong.")
            })
        }
    }, [nombreCategoria])

    return (
        <>
        {cargando ?
        <div  className="itemListContainerLoader">
            <ScaleLoader color="#bf071f"/>
            <p className="cargandoP">Cargando productos...</p>
        </div> :
            
        <div className="itemListContainer">
            {nombreCategoria && 
            <div className="portadaCategoria">
                <img src={`${process.env.PUBLIC_URL}/images/portada/${nombreCategoria}.jpg`} alt=""/>
            </div>
            }
            <ItemList productos={productos}/>
        </div>
        }
        </>
    )
    
}
export default ItemListContainer