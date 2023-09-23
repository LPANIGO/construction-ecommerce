export const PurchaseSummary = ({totalPrice}) => {
    return (
        <aside className="purchaseSummary">
                <h2>Resumen de compra</h2>
                <hr></hr>
                
                <div className="flexColum alignItems-start">
                    <p>Productos ${totalPrice}</p>
                    <p>Envío $--</p>
                    <p><b>Total ${totalPrice}</b></p>
                    <button className="continuePurchase">Continuar compra</button>
                </div>
            </aside>
    )
}