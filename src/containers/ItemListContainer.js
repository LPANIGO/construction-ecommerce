import { useState, useEffect } from "react"
import ItemList from "../pages/ItemList"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom"

// let initialproductos= [];

// const request = fetch('https://fakestoreapi.com/productos')

/* PEDIDO A BASE DE DATOS
Lo mejor es hacer un pedido a la bbdd cada vez que se pide una categoria diferente, y al hacer el pedido
solo buscar los productos de esa categoria y no filtrar todos.
*/


const initialproductos =
[
    {
        id: 1,
        title: "Bañera de acrilico",
        price: 230,
        category: "baños",
        img:"banera-de-acrilico-c-desborde-chico-150x70x40-cod-1030-mura.jpg"
    },
    {
        id: 2,
        title: "Inodoro blanco capea italiana",
        price: 250,
        category: "baños",
        img:"capea-italiana-blanco-inodoro-corto-no-incluye-tapa-y-asiento.jpg"
    },
    {
        id: 3,
        title: "Combo grifería mozart madrid monocromado",
        price: 120,
        category: "baños",
        img:"combo-griferia-mozart-madrid-monocomando-bajo-cromo-ducha-externa-bidet-lavatorio.jpg"
    },
    {
        id: 4,
        title: "Bacha mueble pampa",
        price: 230,
        category: "baños",
        img:"fara-mble-pampa1-82cmabierto-2cajc-meslosa-3ag.jpg"
    },
    {
        id: 5,
        title: "Bacha mueble wengue 60cm",
        price: 250,
        category: "baños",
        img:"fara-mble-wengue-jor-s-mesada-vjor1w-60-cm.jpg"
    },
    {
        id: 6,
        title: "Bacha mueble wengue 62cm",
        price: 120,
        category: "baños",
        img:"fara-mble-wengue-noe-c-mesada-c-caj-vnoe1w-62-cm.jpg"
    },
    {
        id: 7,
        title: "Grifería ducha dominic",
        price: 230,
        category: "baños",
        img:"griferia-para-ducha-con-transf-dominic-0103r-85l-lever-fv.jpg"
    },
    {
        id: 8,
        title: "Grifería ducha eleven cruz",
        price: 250,
        category: "baños",
        img:"griferia-para-ducha-estalgrif-eleven-cruz-cromo-cromo.jpg"
    },
    {
        id: 9,
        title: "Grifería ducha cromo",
        price: 120,
        category: "baños",
        img:"griff-eleven-lever-cromo-cromo-banera.jpg"
    },
    {
        id: 10,
        title: "Grifo magna negro",
        price: 120,
        category: "baños",
        img:"griff-monocom-magna-negro-cromo-lavat-p-bajo.jpg"
    },
    {
        id: 11,
        title: "Bañadera hidromasaje piazza",
        price: 120,
        category: "baños",
        img:"hidromasaje-piazza-codbh150l-150x070-8-jetsalm-sop.jpg"
    },
    {
        id: 12,
        title: "Bacha doble camille",
        price: 120,
        category: "baños",
        img:"of-campi-camille-120-cm-wengue-s-mesdblebacha.jpg"
    },
    {
        id: 13,
        title: "Bacha doble alfa 205",
        price: 120,
        category: "cocina",
        img:"alfa-bacha-doble-ac-inox-304-205-bm-64x37x15.jpg"
    },
    {
        id: 14,
        title: "Bacha doble alfa 304",
        price: 120,
        category: "cocina",
        img:"alfa-bacha-doble-ac-inox-304-304-bm-57x37x18.jpg"
    },
    {
        id: 15,
        title: "Bacha doble alfa 305",
        price: 120,
        category: "cocina",
        img:"alfa-bacha-doble-ac-inox-304-305-bm-64x37x18.jpg"
    },
    {
        id: 16,
        title: "Bacha doble alfa 501",
        price: 120,
        category: "cocina",
        img:"alfa-bacha-doble-ac-inox-304-501-bm-79x37x20.jpg"
    },
    {
        id: 17,
        title: "Bacha redonda alfa 300",
        price: 120,
        category: "cocina",
        img:"alfa-bacha-redonda-ac-inox-304-300e-enc-30x14.jpg"
    },
    {
        id: 18,
        title: "Grifo piazza mesada",
        price: 120,
        category: "cocina",
        img:"aqualaf-piazza-aruma-thema-coc-mes-ccer-3001.jpg"
    },
    {
        id: 19,
        title: "Bacha esquina 430",
        price: 120,
        category: "cocina",
        img:"ariel-114-bacha-ainoxesq-95x51x20-bm-430.jpg"
    },
    {
        id: 20,
        title: "Bacha acero inoxidable ariel 602",
        price: 120,
        category: "cocina",
        img:"ariel-620-bacha-ainoxdoble-63x38x20-bm-304.jpg"
    },
    {
        id: 21,
        title: "Bacha doble johnson",
        price: 120,
        category: "cocina",
        img:"bacha-doble-q085a-johnson.jpg"
    },
    {
        id: 22,
        title: "Bacha doble cuadrada johnson",
        price: 120,
        category: "cocina",
        img:"bacha-doble-quadra-q84a-para-dosificador-838-x-559-x-175-acero-304-johnson.jpg"
    },
    {
        id: 23,
        title: "Bacha simple luxor 855",
        price: 120,
        category: "cocina",
        img:"bacha-simple-luxor-si85a-855-x-482-x-21-sopapa-cestillo-acero-304-johnson.jpg"
    },
    {
        id: 24,
        title: "Bacha simple johnson q71a",
        price: 120,
        category: "cocina",
        img:"bacha-simple-para-dosificador-71x482x1750-304-q71a-johnson.jpg"
    },
    {
        id: 25,
        title: "Grifo lavatorio cromo aqualaf",
        price: 120,
        category: "griferia",
        img:"aqualaf-aymara-cruz-lavatorio-cceram-cromo.jpg"
    },
    {
        id: 26,
        title: "Griferia monocromado con pico movil",
        price: 120,
        category: "griferia",
        img:"griferia-monocomando-para-mesada-de-cocina-con-pico-movil-kansas-0411041-24-fv.jpg"
    },
    {
        id: 27,
        title: "Griferia cocina top cromo",
        price: 120,
        category: "griferia",
        img:"griff-monocom-top-cromo-cocina-p-alto.jpg"
    },
    {
        id: 28,
        title: "Griferia lavatorio tiber lever",
        price: 120,
        category: "griferia",
        img:"griff-tiber-lever-cromo-lavatorio.jpg"
    },
    {
        id: 29,
        title: "Griferia eleven cruz bidet",
        price: 120,
        category: "griferia",
        img:"outlet-griff-eleven-cruz-cr-satin-cr-bidet.jpg"
    },
    {
        id: 30,
        title: "Grifo piazza mesada cocina",
        price: 120,
        category: "griferia",
        img:"piazza-monocdot-cocina-mesada-cromo-10112.jpg"
    },
    {
        id: 31,
        title: "Griferia cromo bañera",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-banera-c-trans-31206-901.jpg"
    },
    {
        id: 32,
        title: "Griferia cromo bidet piazza",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-bide-31204-952.jpg"
    },
    {
        id: 33,
        title: "Griferia mesada cocina piazza optima",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-cocina-mesada-31210-975 .jpg"
    },
    {
        id: 34,
        title: "Griferia cocina piazza optima pared",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-cocina-pared-ext-31211.jpg"
    },
    {
        id: 35,
        title: "Griferia lavatorio piazza optima",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-lavatpcobajo-fund31200960.jpg"
    },
    {
        id: 36,
        title: "Griferia lavatorio piazza pico alto",
        price: 120,
        category: "griferia",
        img:"piazza-optima-cromo-lavat-pico-alto-31201-960-37.jpg"
    },
    {
        id: 37,
        title: "Campana cocina con motor inox",
        price: 120,
        category: "hogares",
        img:"eco-campana-ce-600-c-mot-c-ftro-luz-i14116i-inox.jpg"
    },
    {
        id: 38,
        title: "Eco extractor cocina blanco",
        price: 120,
        category: "hogares",
        img:"eco-extractor-111-cocina-10-blanco.jpg"
    },
    {
        id: 39,
        title: "Eco termotanque 80lts gn",
        price: 120,
        category: "hogares",
        img:"ecotermo-termot-populi-70lts-gn-consup1054022.jpg"
    },
    {
        id: 40,
        title: "Calefactor titanio cava 2000",
        price: 120,
        category: "hogares",
        img:"eskabe-calef-titanio-cava-tb-2000-ter-aro-b-g-g15.jpg"
    },
    {
        id: 41,
        title: "Calefactor titanio cava 5000",
        price: 120,
        category: "hogares",
        img:"eskabe-calef-titanio-cava-tb-5000-ter-aro-b-g-g15.jpg"
    },
    {
        id: 42,
        title: "Cocina 4h 52cm eskabe",
        price: 120,
        category: "hogares",
        img:"eskabe-cocina-4h-52cm-pchainoxgris-g-ng15.jpg"
    },
    {
        id: 43,
        title: "Calefactor eskabe s21 marfil 5000",
        price: 120,
        category: "hogares",
        img:"eskabe-minicon-s21-marfil-5000-aro-b-g-g15.jpg"
    },
    {
        id: 44,
        title: "Calefon orbis 14lt tb",
        price: 120,
        category: "hogares",
        img:"orbis-calefon-14l-t-b-der-enc-elec-bco-gn-315ddo.jpg"
    },
    {
        id: 45,
        title: "Calefactor orbis bge 5000",
        price: 120,
        category: "hogares",
        img:"orbis-calorama-bge-tbu-post-3800-ge-4240bo.jpg"
    },
    {
        id: 46,
        title: "Cocina 4h orbis bca",
        price: 120,
        category: "hogares",
        img:"orbis-cocina-4-hornallas-luz-encelec-bca-858bc3.jpg"
    },
    {
        id: 47,
        title: "Campana cocina spar 406",
        price: 120,
        category: "hogares",
        img:"spar-campprima-contr-desl-60cm-bca5941-406.jpg"
    },
    {
        id: 48,
        title: "Campana cocina vetro 90cm",
        price: 120,
        category: "hogares",
        img:"spar-campvetro-pared-90-cm-inox-vidrio6351-026.jpg"
    },
    {
        id: 49,
        title: "Porcelanato calcio alberdi",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-60-x-60-calcio-alberdi-caja-x-180m2.jpg"
    },
    {
        id: 50,
        title: "Porcelanato pierre portobello",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-60-x-60-pierre-ble-natural-portobello-caja-x-144m2.jpg"
    },
    {
        id: 51,
        title: "Porcelanato cemento block portobello",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-80-x-80-cement-block-ardesia-portobello-caja-x-192m2.jpg"
    },
    {
        id: 52,
        title: "Cerámico cotto colorado",
        price: 120,
        category: "pisosyrevestimientos",
        img:"ceramico-40-x-40-cotto-cortines-caja-x-176m2.jpg"
    },
    {
        id: 53,
        title: "Cerámico rojo mate porfido",
        price: 120,
        category: "pisosyrevestimientos",
        img:"ceramico-mate-porfido-rojo-46-x-46-allpa-caja-x-258-m2.jpg"
    },
    {
        id: 54,
        title: "Cerámico satinado cuarzo",
        price: 120,
        category: "pisosyrevestimientos",
        img:"ceramico-satinado-cuarcita-silice-40-x-40-cortines-caja-x-176m2.jpg"
    },
    {
        id: 55,
        title: "Porcelanato patagonico cobre",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-53-x-53-patagonico-cobre-san-pietro-caja-x-169m2.jpg"
    },
    {
        id: 56,
        title: "Porcelanato nuez",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-59-x-59-city-nuez-san-lorenzo-caja-x-138m2.jpg"
    },
    {
        id: 57,
        title: "Porcelanato concreto beige",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-80-x-80-concreto-beige-6mm-spl-caja-x-256m2.jpg"
    },
    {
        id: 58,
        title: "Porcelanato natural baoba",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-245-x-100-natural-baoba-out-villagres-caja-x-220m2.jpg"
    },
    {
        id: 59,
        title: "Porcelanato native bw deck",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-877-x-877-native-bw-deck-hard-portinari-caja-x-154m2.jpg"
    },
    {
        id: 60,
        title: "Porcelanato toronto gr",
        price: 120,
        category: "pisosyrevestimientos",
        img:"porcelanato-877-x-877-toronto-gr-portinari-caja-x-154m2.jpg"
    },
    {
        id: 61,
        title: "Cumbrera de cerámica caramelo",
        price: 120,
        category: "tejas",
        img:"cumbrera-de-ceramica-caramelo-perkus.jpg"
    },
    {
        id: 62,
        title: "Cumbrera de cerámica chumbo",
        price: 120,
        category: "tejas",
        img:"cumbrera-de-ceramica-chumbo-perkus.jpg"
    },
    {
        id: 63,
        title: "Cumbrera de cerámica gray",
        price: 120,
        category: "tejas",
        img:"cumbrera-de-ceramica-gray-perkus.jpg"
    },
    {
        id: 64,
        title: "Teja americana comun",
        price: 120,
        category: "tejas",
        img:"teja-americana-comun-cerro-negro.jpg"
    },
    {
        id: 65,
        title: "Teja de cerámica plan brick",
        price: 120,
        category: "tejas",
        img:"teja-de-ceramica-plan-brick-perkus.jpg"
    },
    {
        id: 66,
        title: "Teja de cerámica grafite",
        price: 120,
        category: "tejas",
        img:"teja-de-ceramica-plan-grafite-perkus.jpg"
    },
    {
        id: 67,
        title: "Teja de cerámica gray",
        price: 120,
        category: "tejas",
        img:"teja-de-ceramica-plan-gray-perkus.jpg"
    },
    {
        id: 68,
        title: "Teja de cerámica supernova caramelo",
        price: 120,
        category: "tejas",
        img:"teja-de-ceramica-supernova-caramelo-perkus.jpg"
    },
    {
        id: 69,
        title: "Teja de cerámica supernova chumbo",
        price: 120,
        category: "tejas",
        img:"teja-de-ceramica-supernova-chumbo-perkus.jpg"
    }

]
// .then( (response) => {
//     //inspecciono headers para anilizar el contenido antes de recibirlo
//     //transformo el formato del body
//     const productos = response.json() //esta opración tambien es una promesa, para el en caso que la respuesta se muy pesada
//     return productos
// })
// .then( (formatedproductos) => {
//     initialproductos = formatedproductos;
// })
// .catch( (err) => {
//     console.log(err)
// })



const ItemListCointainer = (props) => {

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
        //ver si puedo escribir en una sola linea lo siguiente
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
export default ItemListCointainer