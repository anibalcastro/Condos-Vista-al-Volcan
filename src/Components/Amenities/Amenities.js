import React from "react";
import "./Amenties.css";
import Apartamentos from '../../Images/Icons/icons8-edificio-30.png';
import Bosque from '../../Images/Icons/icons8-bosque-30.png';
import Volcan from '../../Images/Icons/icons8-volcán-30.png'
import Parqueo from '../../Images/Icons/icons8-estacionamiento-30.png'
import Arcade from '../../Images/Icons/icons8-arcade-30.png';
import Mapa from '../../Images/Icons/icons8-mapa-de-apple-30.png'

const Amenties = () => {
  return (
    <div id="Amenidades" className="container amenities">
      <h2 className="titulo-encabezado">NUESTRAS AMENIDADES</h2>

      <div className="container all-amenities">
      <div className="container amenities-description">
        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Apartamentos} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Apartamentos</h5>
            <p className="details-description">Equipados con todo lo que necesitas para tus vacaciones.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Parqueo} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Parqueo</h5>
            <p className="details-description">Privado e iluminado velando por la seguridad de nuestros clientes.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Mapa} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Ubicación Estratégica</h5>
            <p className="details-description">Estamos ubicados en el área central de La Fortuna.</p>
          </div>
        </div>
      </div>

      <div className="container amenities-description">
        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Arcade} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Área de juegos</h5>
            <p className="details-description">Encontrarás entretenimiento dentro de nuestras instalaciones.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Bosque} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Zonas verdes</h5>
            <p className="details-description">Contamos con amplias zonas verdes que rodean nuestras instalaciones.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Volcan} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Vistas panorámicas</h5>
            <p className="details-description">Excelente visualización de los mejores paisajes de La Fortuna.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Amenties;
