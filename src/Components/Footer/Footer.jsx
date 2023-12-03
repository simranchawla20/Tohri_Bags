import React from 'react'
import logo from '../../Assets/Images/TOHRI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Footer/footer.scss'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footer-col footer-left-col'>
            <img className="logoImg pointerCursor" src={logo}></img>
        </div>
        <div className='right-footer-cols'>
            <div className='footer-col'>
                <span>about us</span>
                <span>Contact us</span>
                <span>Founder Note</span>
                <div className='socialmedia-icons'>
                    <FontAwesomeIcon icon={faShoppingCart} className="pointerCursor" style={{color: 'white' }}/>
                    <FontAwesomeIcon icon={faUser} className="pointerCursor" style={{ color: 'white' }}/>
                </div>
            </div>
            <div className='footer-col'>
                <span>My Account</span>
                <span>My wishlist</span>
            </div>
            <div className='footer-col'>
                <span>TERMS & CONDITIONS</span>
                <span>PRIVACY POLICY</span>
                <span>CANCELLATION POLICY</span>
                <span>REFUND POLICY</span>
                <span>SHIPPING POLICY</span>
            </div>
        </div>
        
    </div>
  )
}

export default Footer