import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Lightbox_Images = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
     <div className="container images">
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
      </div>

      <div className="container images">
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
      </div>

      <div className="container images">
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
        <button  className="btn-image" onClick={() => setOpen(true)} >
            <img className="photo" src="https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg">
            </img>
        </button>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "../../Images/FRONTPAGE.png" },
          { src: "https://mlwqw2ckkfdf.i.optimole.com/cb:fi47~3ea6a/w:auto/h:auto/q:mauto/https://www.whattodocr.com/wp-content/uploads/2018/11/condos-vista-al-volcan.jpg" },
          { src: "../../Images/Contenedor-ubicacion.webp" },
        ]}
      />
    </>
  );
};

export default Lightbox_Images;