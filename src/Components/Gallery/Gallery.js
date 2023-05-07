import React from "react";
import Lightbox from "../Lightbox/Lightbox";
import "./Gallery.css";


const MyGallery = () => {


  return (
    <div className="container gallery">
      <h2 className="titulo-encabezado">GALERIA</h2>

      <Lightbox />
    </div>
  );
};

export default MyGallery;
