const ContactUs = () => {

    function validarFormulario(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phoneNum = document.getElementById("phone-num").value;
        let email = document.getElementById("email").value;
        let question = document.getElementById("question").value;
        let form = document.getElementById("contactUsForm");

        let log = "";
        let valid = true;
        if(name === ""){
            log += "<p>* El Campo <q><b>Nombre</b></q> está vacío!</p>";
            valid = false;
        }
        if(phoneNum === "" && email === ""){
            log += "<p>* Es necesario que proporcione un email o número de contacto</p>";
            console.log(phoneNum)
            valid = false;
        }
        if(question === ""){
            log += "<p>* Complete el cuadro de texto con su consulta</p>";      
            valid = false;
        }

        if(valid === true){  
            // form.submit();
            form.reset();
            document.getElementById("result").innerHTML = `<p class="form-ok">Formulario enviado exitosamente.</p>`;
        }else {
            document.getElementById("result").innerHTML = log;
        }
        

    }

    return (
        <>
        <div className="contact-container flexColum">
            <h1>Contacto</h1>
            <div>

            </div>
            <div className="cText">
                <p>Mediante el siguiente formulario contactese con nosotros y nos comunicaremos a la brevedad.</p>
            </div>
            
                <form id="contactUsForm" method="post" action="" className="contactUSForm flexColum" onSubmit={validarFormulario}>
                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                    <input type="text" id="name" className="form-control"></input>

                    <label htmlFor="company" className="form-label">Empresa</label>
                    <input type="text" id="company" className="form-control"></input>

                    <label htmlFor="city" className="form-label">Ciudad</label>
                    <select class="form-control" id="city">
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Entre Rios">Entre Rios</option>
                        <option value="Córdoba">Córdoba</option>
                    </select>

                    <label htmlFor="phone-num" className="form-label">Teléfono</label>
                    <input type="tel" id="phone-num" className="form-control"></input>

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control"></input>
                    
                    <label htmlFor="question" className="form-label">Consulta</label>
                    <textarea id="question" className="form-control question"></textarea>                

                    <button type="submit" className="contact-us-submit">Enviar</button>
                </form>

                <div id="result">

                </div>
        </div>
            
        </>
    )
}
export default ContactUs