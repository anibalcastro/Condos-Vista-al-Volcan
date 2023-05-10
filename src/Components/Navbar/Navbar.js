import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo from '../../Images/LOGO_CONDOMINIOS.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ocultarMenu = () =>{
   let navbar = document.getElementsByClassName('navbar')[0];
   navbar.style.position= 'absolute';
   navbar.style.width = '100%'
   let menu_active = document.getElementsByClassName('nav-menu-active')[0];
    menu_active.style.display = 'none'
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#About" onClick={() => ocultarMenu ()} className="navbar-logo">
          <img className='logo' src={Logo} alt='Logo'></img>
        </a>

        <div className='container menu'>
          <ul className='option'>
            <li className='nav-item'>
              <a href='#Amenidades' className='nav-option'>AMENIDADES</a>
            </li>
            <li className='nav-item'>
              <a href='#Gallery' className='nav-option'>GALERIA</a>
            </li>
            <li className='nav-item'>
              <a href='#Contact' className='nav-option'>CONTACTO</a>
            </li>
          </ul>
        </div>

        <div className='menu-responsive'>
          <div className="navbar-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={isOpen ? 'nav-menu nav-menu-active' : 'nav-menu'}>
            
            
            <div className='container sombra container-servicios'>
              <li className="nav-item">
                <a href="#Amenidades"  onClick={() => ocultarMenu ()} className="nav-link">
                  AMENIDADES
                </a>
              </li>
            </div>


            <div className='container sombra container-galeria'>
              <li className="nav-item">
                <a href="#Gallery"  onClick={() => ocultarMenu ()} className="nav-link">
                  GALERIA
                </a>
              </li>
            </div>
            <div className='container sombra container-contacto'>
              <li className="nav-item">
                <a href="#Contact"  onClick={() => ocultarMenu ()} className="nav-link">
                  CONTACTO
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
