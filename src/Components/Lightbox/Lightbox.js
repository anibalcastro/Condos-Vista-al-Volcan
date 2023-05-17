import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import VolcanCondos from '../../Images/Photos-condos/Volcan-condos.webp';
import ExteriorCondos from '../../Images/Photos-condos/Exterior-condos.webp';
import ExteriorCondos2 from '../../Images/Photos-condos/Exterior-condos-2.webp';
import SalaEstarCondos12 from '../../Images/Photos-condos/SalaEstarCondos12.webp';
import Habitacion2Condos12 from '../../Images/Photos-condos/Habitacion2Condos12.webp';
import CamasCondos122 from '../../Images/Photos-condos/Camas-Condos122.webp';
import Comedor12 from '../../Images/Photos-condos/Condo12.webp';
import CocinaCondos12 from '../../Images/Photos-condos/CocinaCondos12.webp';
import BanoCondos12 from '../../Images/Photos-condos/BanoCondos12.webp';
import SalaEstarCondos from '../../Images/Photos-condos/SalaEstar.webp';
import CamasCondos from '../../Images/Photos-condos/Camas-Condos1.webp'
import ComedorCondos2 from '../../Images/Photos-condos/ComedorCondos2.webp';
import CocinaCondos2 from '../../Images/Photos-condos/CocinaCondos2.webp';
import Decoraciones1 from '../../Images/Photos-condos/Decoraciones1.webp';
import Decoraciones2 from '../../Images/Photos-condos/Decoraciones2.webp'



const Lightbox_Images = () => {
  //const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  let slidesArray = [
    { src: VolcanCondos, name : 'VolcanCondos' },
    { src: ExteriorCondos, name : 'ExteriorCondos' },
    { src: ExteriorCondos2, name: 'ExteriorCondos2' },
    { src: SalaEstarCondos12, name: 'SalaEstarCondos12' },
    { src: Comedor12, name: 'Comedor12' },
    { src: CocinaCondos12, name: 'CocinaCondos12' },
    { src: Habitacion2Condos12, name: 'Habitacion2Condos12' },
    { src: CamasCondos122, name: 'CamansCondos122' },
    { src: BanoCondos12, name: 'BanoCondos12' },
    { src: SalaEstarCondos, name: 'SalaEstarCondos' },
    { src: CocinaCondos2, name: 'CocinaCondos2' },
    { src: ComedorCondos2, name: 'ComedorCondos2' },
    { src: CamasCondos, name: 'CamasCondos' },
    { src: Decoraciones1, name: 'Decoraciones1' },
    { src: Decoraciones2, name: 'Decoraciones2' },
  ];

  const openLightbox = (namePhoto) => {
    const indice = slidesArray.findIndex(slide => slide.name === namePhoto);
    setIndex(indice)
    //setOpen(true);
  }

  return (
    <>
      <div className="container images">
        <button className="btn-image" onClick={() => openLightbox('VolcanCondos')} >
          <img className="photo" src={VolcanCondos} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('ExteriorCondos2')} >
          <img className="photo" src={ExteriorCondos2} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('ExteriorCondos')} >
          <img className="photo" src={ExteriorCondos} alt="Imagen">
          </img>
        </button>
      </div>

      <div className="container images">
        <button className="btn-image" onClick={() => openLightbox('SalaEstarCondos12')} >
          <img className="photo" src={SalaEstarCondos12} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('Comedor12')} >
          <img className="photo" src={Comedor12} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('CocinaCondos12')} >
          <img className="photo" src={CocinaCondos12} alt="Imagen">
          </img>
        </button>
      </div>

      <div className="container images">
        <button className="btn-image" onClick={() => openLightbox('Habitacion2Condos12')} >
          <img className="photo" src={Habitacion2Condos12} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('CamasCondos122')} >
          <img className="photo" src={CamasCondos122} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('BanoCondos12')} >
          <img className="photo" src={BanoCondos12} alt="Imagen">
          </img>
        </button>
      </div>

      <div className="container images">
        <button className="btn-image" onClick={() => openLightbox('SalaEstarCondos')} >
          <img className="photo" src={SalaEstarCondos} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('CocinaCondos2')} >
          <img className="photo" src={CocinaCondos2} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('ComedorCondos2')} >
          <img className="photo" src={ComedorCondos2} alt="Imagen">
          </img>
        </button>
      </div>

      <div className="container images">
        <button className="btn-image" onClick={() => openLightbox('CamasCondos')} >
          <img className="photo" src={CamasCondos} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('Decoraciones1')} >
          <img className="photo" src={Decoraciones1} alt="Imagen">
          </img>
        </button>
        <button className="btn-image" onClick={() => openLightbox('Decoraciones2')} >
          <img className="photo" src={Decoraciones2} alt="Imagen">
          </img>
        </button>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slidesArray}
      />
    </>
  );
};

export default Lightbox_Images;