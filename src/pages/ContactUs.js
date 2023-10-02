const ContactUs = () => {
    return (
        <>
        <div className="contact-container flexColum">
            <h1>Contacto</h1>
            <div>

            </div>
            <div className="cText">
                <p>Mediante el siguiente formulario contactese con nosotros y nos comunicaremos a la brevedad.</p>
            </div>
            
                <form id="contactUsForm" method="" action="" className="contactUSForm flexColum">
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input type="text" id="name" className="form-control"></input>

                    <label htmlFor="company" className="form-label">Empresa</label>
                    <input type="text" id="company" className="form-control"></input>

                    <label htmlFor="city" className="form-label">Ciudad</label>
                    <input type="text" id="city" className="form-control"></input>

                    <label htmlFor="phone-num" className="form-label">Teléfono</label>
                    <input type="tel" id="phone-num" className="form-control"></input>

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control"></input>
                    
                    <label for="question" className="form-label">Consulta</label>
                    <textarea id="question" className="form-control question"></textarea>                

                    <button type="submit" className="contact-us-submit">Enviar</button>
                </form>
        </div>
            
        </>
    )
}
export default ContactUs