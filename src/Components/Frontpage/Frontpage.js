import React from 'react';
import './Frontpage.css';

const Frontpage = () => {

    const reservar = () => {
        window.open("https://www.airbnb.co.cr/users/473801222/listings?user_id=473801222&s=50", "_blank");
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