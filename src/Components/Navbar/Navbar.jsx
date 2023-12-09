import React, { useState } from 'react'
import './navbar.scss'
import hamburger from '../../Assets/Images/menu.svg'
import crossNavbar from '../../Assets/Images/cross-navbar.png'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useOverlay } from '../../Providers/OverlayContext';
import { Link } from 'react-router-dom'

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
          <Link className="navbarItem pointerCursor">Category</Link>
          <Link to="/bestsellers" className="navbarItem pointerCursor">Best Seller</Link>
          <img className="logoImg pointerCursor" src={logo}></img>
          <Link className="navbarItem pointerCursor">Customised Bags</Link>
          <div className="navbarIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pointerCursor"/>
            <FontAwesomeIcon icon={faHeart} className="pointerCursor"/>
            <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor"/>
            <FontAwesomeIcon icon={faUser} className="pointerCursor"/>
          </div>
      </div>
      <div className={sidebarVisible ? "sidebar sidebarVisible" : "sidebar"}>
        <ul className="sidebar-list">
          <li className="sidebar-item pointerCursor">Category <FontAwesomeIcon icon={faCaretDown} /></li>
          <Link className="sidebar-item pointerCursor">Tohri Bags</Link>
          <li className="sidebar-item pointerCursor">Shop by Occasion <FontAwesomeIcon icon={faCaretDown} /></li>
          <Link className="sidebar-item pointerCursor">New Arrivals</Link>
          <Link to="/bestsellers" className="sidebar-item pointerCursor">Best Seller</Link>
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