import React from 'react';
import './Frontpage.css';

const Frontpage = () => {

    const reservar = () => {
        window.open("https://api.whatsapp.com/send?phone=50688717619&text=Hola%2C%20%C2%A1me%20gustar%C3%ADa%20realizar%20una%20reservaci%C3%B3n!%F0%9F%8C%8B", "_blank");
    }

    return (
        <div className='container frontpage'>
            <div className='frontpage-text'>
                <h1 className='encabezado-frontpage'>¿Necesitas unas vacaciones?</h1>
                <button onClick={() => reservar()} className='button-reserva'>RESERVA YA</button>
            </div>
        </div>
    )
}

export default Frontpage;   