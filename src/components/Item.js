import {Link} from "react-router-dom"


export const Item = ({e}) => {
    

    return (
        <>
        <Link to={`/producto/${e.id}`} className="itemList__item flexColum">
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/${e.category}/${e.img}`} alt="placeholder"/>
                <h3>{e.title}</h3> 
            </div>
            <div>
                <p>$ {e.price}</p>
                <button type="button" className="cardBtn">Ver detalle</button>
            </div>
            
        </Link>
        </>
        
    )
}