import React , { useEffect }from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './homepage.scss'
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide'; 
import Banner1 from '../../Assets/Images/Banner1.jpeg'
import Banner2 from '../../Assets/Images/Banner2.jpeg'
import slingBag from '../../Assets/Images/sling bag.png'
import toteBag from '../../Assets/Images/tote bag.jpeg'
import shoulderBag from '../../Assets/Images/Shoulder bag.jpeg'
import handBag from '../../Assets/Images/hand bag.jpeg'
import laptopBag from '../../Assets/Images/laptop bag.jpeg'
import walletBag from '../../Assets/Images/wallet.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepge() {
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      focusAt: 'center',
      autoplay: 5000,
      hoverpause: true,
    }).mount();

    AOS.init();
  }, []);

  return (
    <div className='homepageContainer'> 
      <div className='topBlackBanner'>"Discover Your Signature Bag" - Our Customized Bag Collection is Live Now!</div>
      <Navbar/>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide"><img src={Banner1} alt="Image 1" /></li>
            <li className="glide__slide"><img src={Banner2} alt="Image 2" /></li>
            {/* Add more slides as needed */}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#9664;</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#9654;</button>
        </div>
      </div>
      <div className='explore-text'>
        <span className='upr-explore-text'>Discover the Perfect Blend of Western Elegance and Indian Artistry</span>
        <span className='lower-explore-text'>at Tohri Bags</span>
      </div>
      <div className='explore-categories'>
        <div className='explore-categories-heading-div'>
          <span className='explore-categoryheading'>Explore Categories</span>
        </div>
        <div className='explore-categories-images-section'>
          <div class="explore-category-image-wrapper" data-aos="fade-up">
            <img src={slingBag} alt="Image 1"/>
            <button class="image-button">Sling Bags</button>
          </div>
          <div class="explore-category-image-wrapper" data-aos="fade-up">
            <img src={toteBag} alt="Image 2"/>
            <button class="image-button">Tote Bags</button>
          </div>
          <div class="explore-category-image-wrapper" data-aos="fade-up">
            <img src={shoulderBag} alt="Image 3"/>
            <button class="image-button">Shoulder Bags</button>
          </div>
          <div class="explore-category-image-wrapper" data-aos="fade-up">
            <img src={handBag} alt="Image 4"/>
            <button class="image-button">HandBags</button>
          </div>
          <div class="explore-category-image-wrapper" data-aos="fade-up" >
            <img src={laptopBag} alt="Image 5"/>
            <button class="image-button">Laptop Bags</button>
          </div>
          <div class="explore-category-image-wrapper" data-aos="fade-up">
            <img src={walletBag} alt="Image 6"/>
            <button class="image-button">Wallets</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Homepge
