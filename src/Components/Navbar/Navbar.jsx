import React, { useEffect, useState } from 'react'
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
  const [showCategories, setShowCategories] = useState(false);

  useEffect(()=>{
    if (window.location.pathname === "/") {
      var navbarContainers = document.getElementsByClassName("navbarContainer");
      if (navbarContainers.length > 0) {
        navbarContainers[0].style.position = "relative";
      }
    }
  },[])

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    toggleOverlay();
  } 

  const handleShowCategory = () =>{
    setShowCategories(!showCategories);
  }
  return (
    <>
      {overlayVisible ? <div className={`overlay ${overlayVisible ? 'overlayVisible' : ''}`} onClick={handleSidebar}></div> : ""}
      <div className="navbarContainer">
          <img className="hamburgerImg pointerCursor" src={sidebarVisible ?crossNavbar :hamburger} onClick={handleSidebar} style={{ padding: sidebarVisible ? '10px' : '0px' }}></img>
          <Link className="navbarItem pointerCursor" onClick={handleShowCategory}>Category&nbsp;<FontAwesomeIcon icon={faCaretDown} /></Link>
          <Link to="/bestsellers" className="navbarItem pointerCursor">Best Seller</Link>
          <Link to="/" ><img className="logoImg pointerCursor" src={logo} ></img></Link>
          <Link to="/customised" className="navbarItem pointerCursor">Customised Bags</Link>
          <div className="navbarIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pointerCursor"/>
            <FontAwesomeIcon icon={faHeart} className="pointerCursor"/>
            <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor"/>
            <FontAwesomeIcon icon={faUser} className="pointerCursor"/>
          </div>
      </div>
      {showCategories ? <div className="categories_container">
        <ul className="categories">
          <li className="category">Tote bags</li>
          <li className="category">Sling Bags</li>
          <li className="category">Shoulder Bags</li>
          <li className="category">Laptop Bags</li>
          <li className="category">HandBags</li>
          <li className="category">Wallets</li>
          <li className="category">Vanity Pouch</li>
          <li className="category">Formal</li>
          <li className="category">Party</li>
          <li className="category">Holiday</li>
        </ul>
      </div> : <></>}
      <div className={sidebarVisible ? "sidebar sidebarVisible" : "sidebar"}>
        <ul className="sidebar-list">
          <li className="sidebar-item pointerCursor">Category<FontAwesomeIcon icon={faCaretDown} /></li>
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