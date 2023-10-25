import React from 'react'
import './navbar.scss'
import hamburger from '../../Assets/Images/menu.svg'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbarContainer">
        <img className="hamburgerImg pointerCursor" src={hamburger}></img>
        <span className="navbarItem pointerCursor">Category</span>
        <span className="navbarItem pointerCursor">Best Seller</span>
        <img className="logoImg pointerCursor" src={logo}></img>
        <span className="navbarItem pointerCursor">Customised Bags</span>
        <div className="navbarIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="pointerCursor"/>
          <FontAwesomeIcon icon={faHeart} className="pointerCursor"/>
          <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor"/>
          <FontAwesomeIcon icon={faUser} className="pointerCursor"/>
        </div>
    </div>
  )
}

export default Navbar