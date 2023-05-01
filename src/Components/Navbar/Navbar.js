import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo from '../../Images/LOGO_CONDOMINIOS.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img className='logo' src={Logo}></img>
        </a>
        <div className="navbar-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu nav-menu-active' : 'nav-menu'}>
          <div className='container sombra container-servicios'>
          <li className="nav-item">
            <a href="/" className="nav-link">
              SERVICIOS
            </a>
          </li>
          </div>
          
          <div className='container sombra container-galeria'>
          <li className="nav-item">
            <a href="/" className="nav-link">
              GALERIA
            </a>
          </li>

          </div>

          <div className='container sombra container-ubicacion'>
          <li className="nav-item">
            <a href="/" className="nav-link">
              UBICACION
            </a>
          </li>
            
          </div>
        

          <div className='container sombra container-contacto'>
          <li className="nav-item">
            <a href="/" className="nav-link">
              CONTACTO
            </a>
          </li>
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
