// let initialproductos;
//const request = fetch("https://dummyjson.com/products");
// request
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

// const request = fetch('https://fakestoreapi.com/productos')

/* PEDIDO A BASE DE DATOS
Lo mejor es hacer un pedido a la bbdd cada vez que se pide una categoria diferente, y al hacer el pedido
solo buscar los productos de esa categoria y no filtrar todos.
*/


// ETAPAS DE FETCH:
// 1 REALIZO EL PEDIDO
// const request = fetch("https://dummyjson.com/products/categories");
//const request = fetch("https://backend-productos.netlify.app/api/categorias");

const request = fetch("https://dummyjson.com/products");
let initialproductos;
request
.then((response) => {
    // 2 RECIBO LA RESPUESTA: 
    //con esta respuesta puedo, por ej, verificar en los headers si me llega la info en el formato que espero (json en este caso)

    //Al convertir en json, esta acción se convierte en otr promesa
    const produtos = response.json()
    return produtos
})
.then((formatedproductos) => { 
    //En este then recibo la promesa que se crea en el then anterior. En vez de anidar este then dentro del anterior tengo la opcion de escribirlo a continuación.
    initialproductos = formatedproductos;
    console.log(formatedproductos);
})
.catch((err) => {
    console.log(err);
})