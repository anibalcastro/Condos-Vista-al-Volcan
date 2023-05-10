import React from "react";
import './Contact.css'
import LogoCondos from "../../Images/LOGO_CONDOMINIOS.webp";


const Contact = () => {

    return (
        <div id="Contact" className="container contact">
            <h2 className="titulo-contacto">CONTACTO</h2>
            <div className="container numbers-logo">
                <div className="container numbers">
                    <a className="a-numero" href="+506 8871 7619">+506 8871 7619</a>
                    <hr />
                    <a  className="a-numero" href="+506 8830 5286">+506 8830 5286 </a>
                    <hr />
                    <a className="a-numero" href="+506 2479 7230">+506 2479 7230</a>
                </div>
                <div className="container container-logo">
                    <img className="logo-condos" src={LogoCondos} alt="Logotipo"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;