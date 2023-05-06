import React from "react";
import "./Amenties.css";
import Apartamentos from '../../Images/Icons/icons8-edificio-30.png'

const Amenties = () => {
  return (
    <div className="container amenities">
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
            <img className="icono" src={Apartamentos} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Apartamentos</h5>
            <p className="details-description">Equipados con todo lo que necesitas para tus vacaciones.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Apartamentos} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Apartamentos</h5>
            <p className="details-description">Equipados con todo lo que necesitas para tus vacaciones.</p>
          </div>
        </div>
      </div>

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
            <img className="icono" src={Apartamentos} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Apartamentos</h5>
            <p className="details-description">Equipados con todo lo que necesitas para tus vacaciones.</p>
          </div>
        </div>

        <div className="container container-amenitie">
          <div className="circle-background-image">
            <img className="icono" src={Apartamentos} alt="Icono"></img>
          </div>

          <div className="container details">
            <h5 className="title-details">Apartamentos</h5>
            <p className="details-description">Equipados con todo lo que necesitas para tus vacaciones.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Amenties;
