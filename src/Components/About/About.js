import React from "react";
import "./About.css";
import Photo_1 from '../../Images/FRONTPAGE.webp'

const About = () => {
  return (
    <div id="About" className="container container-about">
      <div className="container about">
        <h2 className="company-name">CONDO'S VISTA AL VOLCAN</h2>
        <p className="description">
        En Condo's Vista Al Volcan, nuestro objetivo es ofrecerte una
        experiencia de alojamiento única y cómoda. Todos nuestros apartamentos
        tienen balcones privados con vistas a la montaña y al Volcán Arenal.
        También tenemos un personal servicial y amable que está disponible para
        ayudarte con cualquier necesidad que tengas. ¡Ven a visitarnos y
        disfruta de la belleza natural de La Fortuna!
      </p>
      </div>
      <div className="container photos-about">
        <img className="photo-1" src={Photo_1} alt="Imagen de condominios vista volcan"></img>
        <hr></hr>
        <img  className="photo-2" src={Photo_1} alt="Imagen de condosminios vista volcan"></img>
      </div>
    </div>
  );
};

export default About;
