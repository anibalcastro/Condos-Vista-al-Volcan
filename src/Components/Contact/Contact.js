import React from "react";
import './Contact.css'
import LogoCondos from "../../Images/LOGO_CONDOMINIOS.webp";
import FacebookIcon from "../../Images/Icons/icons8-facebook-30.png";
import WhatsAppIcon from "../../Images/Icons/icons8-whatsapp-30.png";
import InstagramIcon from "../../Images/Icons/icons8-instagram-30.png";


const Contact = () => {

    return (
        <div id="Contact" className="container contact">
            <h2 className="titulo-contacto">CONTACTO</h2>
            <div className="container numbers-logo">
                <div className="container numbers">
                    <p className="a-numero" >+506 8871 7619</p>
                    <hr />
                    <p  className="a-numero" >+506 8830 5286 </p>
                    <hr />
                    <p className="a-numero" >+506 2479 7230 </p>
                </div>
                <div className="container container-logo">
                    <img className="logo-condos" src={LogoCondos} alt="Logotipo"></img>
                </div>
            </div>

            <div className="container social-media">
                        <div className="circle-media">
                            <a className="link-media" href="https://api.whatsapp.com/send?phone=50688717619&text=Hola%2C%20%C2%A1me%20gustar%C3%ADa%20informaci%C3%B3n!%F0%9F%8C%8B"target="_blank" rel="noreferrer">
                                <img src={WhatsAppIcon} alt="icono red social" />
                            </a>
                        </div>

                        <div className="circle-media">
                            <a className="link-media" href="https://www.facebook.com/lafortunacondos" target="_blank" rel="noreferrer">
                                <img src={FacebookIcon} alt="icono red social" />
                            </a>
                        </div>

                        <div className="circle-media">
                            <a className="link-media" href="https://www.instagram.com/lafortunacondos/" target="_blank" rel="noreferrer">
                                <img src={InstagramIcon} alt="icono red social" />
                            </a>
                        </div>
                    </div>  
        </div>
    )
}

export default Contact;