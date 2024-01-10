import React, { useEffect, useState } from 'react'
import './navbar.scss'
import hamburger from '../../Assets/Images/menu.svg'
import crossNavbar from '../../Assets/Images/cross-navbar.png'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser, faCaretDown, faArrowRight, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useOverlay } from '../../Providers/OverlayContext';
import { Link } from 'react-router-dom'

function Navbar() {

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { overlayVisible, toggleOverlay } = useOverlay();
  const [showCategories, setShowCategories] = useState(false);
  const [categorybarVisible, setCategorybarVisible] = useState(false);

  useEffect(()=>{
    if (window.location.pathname === "/") {
      var navbarContainers = document.getElementsByClassName("navbarContainer");
      if (navbarContainers.length > 0) {
        navbarContainers[0].style.position = "relative";
      }
    }
    toggleOverlay(false);
  },[])

  const handleSidebar = () => {
    toggleOverlay(!sidebarVisible);
    setSidebarVisible(!sidebarVisible);
  } 

  const handleShowCategory = () =>{
    setShowCategories(!showCategories);
  }

  const toggleCategoryBar = () => {
    setCategorybarVisible(!categorybarVisible);
  };

  return (
    <>
      {overlayVisible ? <div className={`overlay ${overlayVisible ? 'overlayVisible' : ''}`} onClick={()=>{handleSidebar();}}></div> : ""}
      <div className="navbarContainer">
          <img className="hamburgerImg pointerCursor" src={sidebarVisible ?crossNavbar :hamburger} onClick={()=>{handleSidebar();}} style={{ padding: sidebarVisible ? '10px' : '0px' }}></img>
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
          <Link to="/tote" className="category">Tote bags</Link>
          <Link to="/sling" className="category">Sling Bags</Link>
          <Link to="/shoulder" className="category">Shoulder Bags</Link>
          <Link to="/laptop" className="category">Laptop Bags</Link>
          <Link to="/handbags" className="category">HandBags</Link>
          <Link to="/wallets" className="category">Wallets</Link>
          <Link to="/vanity" className="category">Vanity Pouch</Link>
          <Link to="/formal" className="category">Formal</Link>
          <Link to="/party" className="category">Party</Link>
          <Link to="/holiday" className="category">Holiday</Link>
        </ul>
      </div> : <></>}
      <div className={sidebarVisible ? "sidebar sidebarVisible" : "sidebar"}>
        <ul className="sidebar-list">
          <li className="sidebar-item pointerCursor" onClick={toggleCategoryBar}>Category<FontAwesomeIcon icon={faArrowRight}/></li>
          <li className="sidebar-item pointerCursor">Shop by Occasion <FontAwesomeIcon icon={faArrowRight} /></li>
          <Link className="sidebar-item pointerCursor">New Arrivals</Link>
          <Link to="/bestsellers" className="sidebar-item pointerCursor">Best Seller</Link>
        </ul>
        {categorybarVisible ?
          <div className={`category-dropdown ${sidebarVisible ? 'open' : ''}`}>
            <span onClick={toggleCategoryBar}><FontAwesomeIcon icon={faArrowLeft} className="back-arrow pointerCursor"/> Back</span>
            <ul className="category-list">
              <Link to="/tote" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Tote Bags</Link>
              <Link to="/sling" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> SLing Bags</Link>
              <Link to="/shoulder" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Shoulder Bags</Link>
              <Link to="/laptop" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Laptop Bags</Link>
              <Link to="/handbags" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Handbags</Link>
              <Link to="/wallets" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Wallets</Link>
              <Link to="/vanity" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Vanity Pouch</Link>
              <Link to="/formal" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Fromal Bags</Link>
              <Link to="/party" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Party Bags</Link>
              <Link to="/holiday" className="category" onClick={()=>{handleSidebar(); toggleCategoryBar();}}><FontAwesomeIcon icon={faChevronRight} /> Holiday Bags</Link>
            </ul>
          </div> 
          :<></>}
        <div className="sidebar-social">
            <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor" style={{color: 'black' }}/>
            <FontAwesomeIcon icon={faUser} className="pointerCursor" style={{ color: 'black' }}/>
        </div>
      </div>
    </>
  )
}

export default Navbar