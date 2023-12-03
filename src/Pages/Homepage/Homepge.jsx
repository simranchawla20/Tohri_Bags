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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag, faShoppingBasket, faHandHoldingHeart,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import heart from '../../Assets/Images/heart-regular.svg'
import saleOfDayBannerImg from '../../Assets/Images/clearance sale banner.png'
import Footer from '../../Components/Footer/Footer';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function Homepge() {
  const reviews = [
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    {
      name: 'Jyoti Singh',
      rating: '4 star',
      comment: 'gyudsgha jkhnknxiojw kdsmxzkl euigbcsdhj bxznjkb dbihebjksanckxj bdjbcejkdsx idhjksbcx bcijkbdejks',
    },
    // Add more reviews here
  ];
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      focusAt: 'center',
      autoplay: 5000,
      hoverpause: true,
    }).mount();

    new Glide(".glide2", {
      type: "carousel",
      startAt: 0,
      perView: 5,
      focusAt: "center",
      gap: 20,
      breakpoints: {
        1232: {
          perView: 4,
        },
        1000: {
          perView: 3,
        },
        470: {
          perView: 2,
        },
      },
    }).mount();
    new Glide(".glide3", {
      type: "carousel",
      startAt: 0,
      perView: 5,
      focusAt: "center",
      gap: 20,
      breakpoints: {
        1232: {
          perView: 4,
        },
        1000: {
          perView: 3,
        },
        470: {
          perView: 2,
        },
      },
    }).mount();

    new Glide('.glide4', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      focusAt: 'center',
      gap: 20,
      breakpoints: {
        768: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
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
          <div className="explore-category-image-wrapper" data-aos="fade-up">
            <img src={slingBag} alt="Image 1"/>
            <button className="image-button">Sling Bags</button>
          </div>
          <div className="explore-category-image-wrapper" data-aos="fade-up">
            <img src={toteBag} alt="Image 2"/>
            <button className="image-button">Tote Bags</button>
          </div>
          <div className="explore-category-image-wrapper" data-aos="fade-up">
            <img src={shoulderBag} alt="Image 3"/>
            <button className="image-button">Shoulder Bags</button>
          </div>
          <div className="explore-category-image-wrapper" data-aos="fade-up">
            <img src={handBag} alt="Image 4"/>
            <button className="image-button">HandBags</button>
          </div>
          <div className="explore-category-image-wrapper" data-aos="fade-up" >
            <img src={laptopBag} alt="Image 5"/>
            <button className="image-button">Laptop Bags</button>
          </div>
          <div className="explore-category-image-wrapper" data-aos="fade-up">
            <img src={walletBag} alt="Image 6"/>
            <button className="image-button">Wallets</button>
          </div>
          </div>
      </div>
      <div className='multiple-banner'>
        <span>Design your appearance in a <br></br> unique manner</span>
        <button className="image-button">Shop Now</button>
      </div>
      <div className='newest-release'>
        <div className='newest-release-heading'>Get your hands on our Newest Releases</div>
        <div className='newest-release-carousal'>
          <div class="glide glide2">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <div className='newest-card'>
                          <div className='newest-card-image-div'>
                            <img src={shoulderBag}></img>
                            <div className='likeCircle'><img src={heart}></img></div>
                          </div>
                          <div className='newest-product-details'>
                            <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                            <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className='newest-card'>
                         <div className='newest-card-image-div'>
                            <img src={shoulderBag}></img>
                            <div className='likeCircle'><img src={heart}></img></div>
                          </div>
                          <div className='newest-product-details'>
                            <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                            <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className='newest-card'>
                          <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className='newest-card'>
                         <div className='newest-card-image-div'>
                            <img src={shoulderBag}></img>
                            <div className='likeCircle'><img src={heart}></img></div>
                          </div>
                          <div className='newest-product-details'>
                            <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                            <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className='newest-card'>
                         <div className='newest-card-image-div'>
                            <img src={shoulderBag}></img>
                            <div className='likeCircle'><img src={heart}></img></div>
                          </div>
                          <div className='newest-product-details'>
                            <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                            <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                    <li className="glide__slide">
                        <div className='newest-card'>
                         <div className='newest-card-image-div'>
                            <img src={shoulderBag}></img>
                            <div className='likeCircle'><img src={heart}></img></div>
                          </div>
                          <div className='newest-product-details'>
                            <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                            <span className='newest-product-price'>Rs. 900.00</span>
                          </div>
                        </div>
                    </li>
                </ul>
              </div>
              <div class="glide__arrows" data-glide-el="controls">
                  <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="19" viewBox="0 0 9 19"
                          fill="none">
                          <path
                              d="M8.74325 1.97832C8.743 2.26333 8.62957 2.53658 8.42791 2.73799L2.92965 8.23625C2.76323 8.40263 2.63121 8.60017 2.54114 8.81757C2.45107 9.03498 2.40471 9.268 2.40471 9.50332C2.40471 9.73865 2.45107 9.97167 2.54114 10.1891C2.63121 10.4065 2.76323 10.604 2.92965 10.7704L8.42075 16.2615C8.61657 16.4642 8.72492 16.7358 8.72247 17.0176C8.72002 17.2995 8.60697 17.5691 8.40765 17.7684C8.20834 17.9678 7.93871 18.0808 7.65685 18.0833C7.37499 18.0857 7.10344 17.9774 6.9007 17.7815L1.4096 12.2947C0.671262 11.5549 0.256592 10.5525 0.256592 9.50726C0.256592 8.46207 0.671262 7.45958 1.4096 6.71979L6.90786 1.21794C7.05821 1.0675 7.2498 0.965034 7.45839 0.923515C7.66699 0.881996 7.88321 0.903285 8.0797 0.984689C8.27619 1.06609 8.44412 1.20395 8.56223 1.38083C8.68035 1.5577 8.74334 1.76563 8.74325 1.97832Z"
                              fill="#757575" />
                      </svg>
                  </button>
                  <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                      <svg width="9" height="18" viewBox="0 0 9 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M0.686279 16.5268C0.686525 16.2477 0.797588 15.9802 0.995051 15.7829L6.37891 10.3991C6.54187 10.2362 6.67114 10.0427 6.75933 9.82986C6.84753 9.61698 6.89292 9.38881 6.89292 9.15838C6.89292 8.92795 6.84753 8.69978 6.75933 8.4869C6.67114 8.27401 6.54187 8.08059 6.37891 7.91768L1.00207 2.53733C0.810323 2.3388 0.704224 2.0729 0.706622 1.7969C0.709021 1.52091 0.819725 1.25689 1.01489 1.06173C1.21006 0.86656 1.47407 0.755856 1.75007 0.753458C2.02606 0.751059 2.29196 0.857159 2.49049 1.0489L7.86733 6.42504C8.5903 7.14944 8.99634 8.13107 8.99634 9.15452C8.99634 10.178 8.5903 11.1596 7.86733 11.884L2.48347 17.2679C2.33647 17.4149 2.14919 17.5152 1.94526 17.556C1.74133 17.5967 1.5299 17.5762 1.33764 17.4969C1.14538 17.4176 0.980911 17.2832 0.864987 17.1105C0.749062 16.9379 0.686877 16.7348 0.686279 16.5268Z"
                              fill="#757575" />
                      </svg>
                  </button>
              </div>
              {/* <div class="glide__bullets" data-glide-el="controls[nav]">
                  <button class="glide__bullet" data-glide-dir="=0"></button>
                  <button class="glide__bullet" data-glide-dir="=1"></button>
                  <button class="glide__bullet" data-glide-dir="=2"></button>
                  <button class="glide__bullet" data-glide-dir="=3"></button>
                  <button class="glide__bullet" data-glide-dir="=4"></button>
              </div> */}
            </div>
        </div>
      </div>
      <div className='clearance-sale-div'>
        <span className='sale-of-day-text'>Sale of the Day</span>
        <div className='clearance-sale-banner'>
          <img src={saleOfDayBannerImg} className='saleOfDayBannerImg'></img>
          <button className="image-button clearance-sale-shop-btn">Shop Now</button>
        </div>
      </div>
      <div className='products-in-sale'>
          <span className='Products-in-sale-text'>Products in Sale:</span>
          <div className='newest-release-carousal'>
            <div class="glide glide3">
              <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                      <li className="glide__slide">
                          <div className='newest-card'>
                            <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                      <li className="glide__slide">
                          <div className='newest-card'>
                          <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                      <li className="glide__slide">
                          <div className='newest-card'>
                            <div className='newest-card-image-div'>
                                <img src={shoulderBag}></img>
                                <div className='likeCircle'><img src={heart}></img></div>
                              </div>
                              <div className='newest-product-details'>
                                <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                                <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                      <li className="glide__slide">
                          <div className='newest-card'>
                          <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                      <li className="glide__slide">
                          <div className='newest-card'>
                          <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                      <li className="glide__slide">
                          <div className='newest-card'>
                          <div className='newest-card-image-div'>
                              <img src={shoulderBag}></img>
                              <div className='likeCircle'><img src={heart}></img></div>
                            </div>
                            <div className='newest-product-details'>
                              <span className='newest-product-name'>tohri bag brown solid sling bag</span>
                              <span className='newest-product-price'>Rs. 900.00</span>
                            </div>
                          </div>
                      </li>
                  </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="19" viewBox="0 0 9 19"
                            fill="none">
                            <path
                                d="M8.74325 1.97832C8.743 2.26333 8.62957 2.53658 8.42791 2.73799L2.92965 8.23625C2.76323 8.40263 2.63121 8.60017 2.54114 8.81757C2.45107 9.03498 2.40471 9.268 2.40471 9.50332C2.40471 9.73865 2.45107 9.97167 2.54114 10.1891C2.63121 10.4065 2.76323 10.604 2.92965 10.7704L8.42075 16.2615C8.61657 16.4642 8.72492 16.7358 8.72247 17.0176C8.72002 17.2995 8.60697 17.5691 8.40765 17.7684C8.20834 17.9678 7.93871 18.0808 7.65685 18.0833C7.37499 18.0857 7.10344 17.9774 6.9007 17.7815L1.4096 12.2947C0.671262 11.5549 0.256592 10.5525 0.256592 9.50726C0.256592 8.46207 0.671262 7.45958 1.4096 6.71979L6.90786 1.21794C7.05821 1.0675 7.2498 0.965034 7.45839 0.923515C7.66699 0.881996 7.88321 0.903285 8.0797 0.984689C8.27619 1.06609 8.44412 1.20395 8.56223 1.38083C8.68035 1.5577 8.74334 1.76563 8.74325 1.97832Z"
                                fill="#757575" />
                        </svg>
                    </button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <svg width="9" height="18" viewBox="0 0 9 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.686279 16.5268C0.686525 16.2477 0.797588 15.9802 0.995051 15.7829L6.37891 10.3991C6.54187 10.2362 6.67114 10.0427 6.75933 9.82986C6.84753 9.61698 6.89292 9.38881 6.89292 9.15838C6.89292 8.92795 6.84753 8.69978 6.75933 8.4869C6.67114 8.27401 6.54187 8.08059 6.37891 7.91768L1.00207 2.53733C0.810323 2.3388 0.704224 2.0729 0.706622 1.7969C0.709021 1.52091 0.819725 1.25689 1.01489 1.06173C1.21006 0.86656 1.47407 0.755856 1.75007 0.753458C2.02606 0.751059 2.29196 0.857159 2.49049 1.0489L7.86733 6.42504C8.5903 7.14944 8.99634 8.13107 8.99634 9.15452C8.99634 10.178 8.5903 11.1596 7.86733 11.884L2.48347 17.2679C2.33647 17.4149 2.14919 17.5152 1.94526 17.556C1.74133 17.5967 1.5299 17.5762 1.33764 17.4969C1.14538 17.4176 0.980911 17.2832 0.864987 17.1105C0.749062 16.9379 0.686877 16.7348 0.686279 16.5268Z"
                                fill="#757575" />
                        </svg>
                    </button>
                </div>
                {/* <div class="glide__bullets" data-glide-el="controls[nav]">
                    <button class="glide__bullet" data-glide-dir="=0"></button>
                    <button class="glide__bullet" data-glide-dir="=1"></button>
                    <button class="glide__bullet" data-glide-dir="=2"></button>
                    <button class="glide__bullet" data-glide-dir="=3"></button>
                    <button class="glide__bullet" data-glide-dir="=4"></button>
                </div> */}
              </div>
          </div>
      </div>
      <div className='shop-by-occasion'>
          <span className='shop-by-occasion-text'>Shop by Occasion</span>
          <div className='explore-categories-images-section'>
            <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
              <img src={slingBag} alt="Image 1"/>
              <button className="image-button">Sling Bags</button>
            </div>
            <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
              <img src={toteBag} alt="Image 2"/>
              <button className="image-button">Tote Bags</button>
            </div>
            <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
              <img src={shoulderBag} alt="Image 3"/>
              <button className="image-button">Shoulder Bags</button>
            </div>
            <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
              <img src={handBag} alt="Image 4"/>
              <button className="image-button">HandBags</button>
            </div>
          </div>
      </div>
      <div className='shop-by-occasion shopBest'>
        <span className='shop-by-occasion-text'>Shop The Best</span>
        <div className='explore-categories-images-section'>
          <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
            <img src={slingBag} alt="Image 1"/>
            <button className="image-button">Sling Bags</button>
          </div>
          <div className="shop-by-occasion-img-wrapper" data-aos="fade-up">
            <img src={toteBag} alt="Image 2"/>
            <button className="image-button">Tote Bags</button>
          </div>
        </div>
      </div>
      <div className='shop-by-occasion ourInstagram'>
          <span className='shop-by-occasion-text'>Our Instagram</span>
          <div className='explore-categories-images-section'>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={slingBag} alt="Image 1"/>
            </div>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={toteBag} alt="Image 2"/>
            </div>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={shoulderBag} alt="Image 3"/>
            </div>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={handBag} alt="Image 4"/>
            </div>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={handBag} alt="Image 4"/>
            </div>
            <div className="instagram-img-wrapper pointerCursor" data-aos="fade-up">
              <div class="overlay">
              </div>
              <img src={handBag} alt="Image 4"/>
            </div>
          </div>
      </div>
      <div className='slogans-section'>
        <div className='slogans-inner-section'>
            <div className='slogan-div'>
                <FontAwesomeIcon icon={faShoppingBag} className="pointerCursor" style={{ fontSize: '80px', color: '#FF5733' }} />
                <span className='slogan-text'>Cherish Your Style</span>
            </div>
            <div className='slogan-div'>
                <FontAwesomeIcon icon={faHandHoldingHeart} className="pointerCursor" style={{ fontSize: '80px', color: '#FF5733' }} />
                <span className='slogan-text'>Cherish Your Style</span>
            </div>
            <div className='slogan-div'>
                <FontAwesomeIcon icon={faArrowTrendUp} className="pointerCursor" style={{ fontSize: '80px', color: '#FF5733' }} />
                <span className='slogan-text'>Trendy, Ethical, Timeless</span>
            </div>
        </div>
      </div>
      <div className='insights-section'>
        <div className='insights-section-heading'>Insights from our valued clients</div>
        <div className='insigths-carousal'>
          <div className="glide glide4">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {reviews.map((review, index) => (
                  <li className="glide__slide" key={index}>
                    <div className='insight-card'>
                      <div className='name-and-rate'>
                        <span className='insight-name'>{review.name}</span>
                        {/* <div className='insight-rating'>{review.rating}</div> */}
                        <img className="rating-stars" src="https://cdn.shopify.com/s/files/1/0744/4807/7083/files/Group_96_424d3bd6-54ac-4b49-aa92-2335f49e6907.png?v=1684742069"></img>
                      </div>
                      <span className='insight-comment'>{review.comment}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              {reviews.map((_, index) => (
                <button className="glide__bullet" key={index} data-glide-dir={`=${index}`}></button>
              ))}
            </div>
          </div>
        </div> 
      </div>
      <div className='subscribe'>
        <span className='subscribe-text'>Subscribe Now!</span>
        <div className='subscribe-input-div'>
          <input type='email' placeholder='Enter your email here....'></input>
          <button className='pointerCursor'>Submit</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepge
