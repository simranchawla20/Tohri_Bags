import React from 'react'
import hamburger from '../../Assets/Images/menu.svg'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='navbar-container'>
        <img className="hamburger-img" src={hamburger}></img>
        <span className='navbarItem'>Category</span>
        <span className='navbarItem'>Best Seller</span>
        {/* <img className="hamburger-img" src={logo}></img> */}
        <span className='navbarItem'>Customised Bags</span>
        <div className='navbar-icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
        </div>
    </div>
  )
}

export default Navbar