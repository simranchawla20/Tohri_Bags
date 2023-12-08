import React, { useState } from 'react'
import './navbar.scss'
import hamburger from '../../Assets/Images/menu.svg'
import crossNavbar from '../../Assets/Images/cross-navbar.png'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useOverlay } from '../../Providers/OverlayContext';

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { overlayVisible, toggleOverlay } = useOverlay();
  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    toggleOverlay();
  }
  return (
    <>
      {overlayVisible ? <div className={`overlay ${overlayVisible ? 'overlayVisible' : ''}`} onClick={handleSidebar}></div> : ""}
      <div className="navbarContainer">
          <img className="hamburgerImg pointerCursor" src={sidebarVisible ?crossNavbar :hamburger} onClick={handleSidebar} style={{ padding: sidebarVisible ? '10px' : '0px' }}></img>
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
      <div className={sidebarVisible ? "sidebar sidebarVisible" : "sidebar"}>
        <ul className="sidebar-list">
          <li className="sidebar-item pointerCursor">Category</li>
          <li className="sidebar-item pointerCursor">Tohri Bags</li>
          <li className="sidebar-item pointerCursor">Shop by Occasion</li>
          <li className="sidebar-item pointerCursor">New Arrivals</li>
          <li className="sidebar-item pointerCursor">Best Seller</li>
        </ul>
        <div className="sidebar-social">
            <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor" style={{color: 'black' }}/>
            <FontAwesomeIcon icon={faUser} className="pointerCursor" style={{ color: 'black' }}/>
        </div>
      </div>
    </>
  )
}

export default Navbar