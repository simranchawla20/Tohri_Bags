import React, { useState } from 'react'
import "./bestSeller.scss"
import Navbar from '../../Components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function BestSeller() {
    const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 6,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 7,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 8,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 9,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 10,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 11,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 12,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },

    ]
    const categories = [ "Tote bags" , "Sling bags" , "Shoulder bags", "Laptop bags", "Handbags" , "Wallets" , "vanity pouch", "Formal", "Party", "Holiday"];
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ from: null, to: null });
    const disabledCategories = ["Sling bags", "Laptop bags"];

    const handlePriceFilter = () =>{
      const ele = document.getElementsByClassName("price_range");
      if(ele[0].style.display==="flex"){
        ele[0].style.display="none";
      }
      else{
        ele[0].style.display="flex";
      }
    }
    const handleCategoryFilter = () =>{
      const ele = document.getElementsByClassName("categories_filter");
      if(ele[0].style.display==="flex"){
        ele[0].style.display="none";
      }
      else{
        ele[0].style.display="flex";
      }
    }

    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
      } else {
        if (!disabledCategories.includes(category)) {
          setSelectedCategories([...selectedCategories, category]);
        }
      }
    };
    const handleCategoryRemove = (category) => {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
      const checkbox = document.getElementById(category);
      if (checkbox) {
        checkbox.checked = false;
      }
    };
    const handlePriceRemove = () => {
      setPriceFilter({ from: null, to: null });
    };
    handlePriceRemove

    const handleInputChange = (event, field) => {
      const value = event.target.value;
      if (!isNaN(value) || value === '') {
        setPriceFilter({
          ...priceFilter,
          [field]: value === '' ? null : parseFloat(value)
        });
      }
    };
  return (
    <>
      <Navbar/>
      <div className='bestsellers'>
          <div className='bestseller-filter-section'>
              <h2 className='bestseller-filter-heading'>BEST SELLER</h2>
              <ul className='filters'>
                  <li className="filter-item">Filter:</li>
                  {(selectedCategories.length>0 || priceFilter.from!=null || priceFilter.to!=null)  ? 
                    <div className="filters_applied">
                      {priceFilter.from!=null || priceFilter.to!=null ? <span className="item_applied">{`Rs. ${priceFilter.from ? priceFilter.from : 0} - ${priceFilter.to ? priceFilter.to : 1950}`} <FontAwesomeIcon icon={faXmark} onClick={handlePriceRemove} style={{cursor: "pointer"}}/></span> : "" }
                      {selectedCategories.map(selectedCategory => (
                        <span className="item_applied" key={selectedCategory}>{selectedCategory} <FontAwesomeIcon icon={faXmark} onClick={handleCategoryRemove(selectedCategory)} style={{cursor: "pointer"}}/></span>
                      ))}
                    </div> 
                    : ""
                  }
                  <li className="filter-item" onClick={handlePriceFilter}><span>Price</span><span>⌄</span></li>
                  <div className="price_range">
                    <span>the highest price is Rs. 1950.00/-</span>
                    <div className='price_range_inputs'>
                      <span className="ruppes">₹</span>
                      <div className="low_range">
                        <span className="from">From</span>
                        <input
                          type="text"
                          value={priceFilter.from !== null ? priceFilter.from : ''}
                          onChange={(e) => handleInputChange(e, 'from')}
                        />
                      </div>
                      <div className="high_range">
                        <span className="to">To</span>
                        <input
                          type="text"
                          value={priceFilter.to !== null ? priceFilter.to : ''}
                          onChange={(e) => handleInputChange(e, 'to')}
                        />
                      </div>
                    </div>
                  </div>
                  <li className="filter-item"><span>Color</span><span>⌄</span></li>
                  <li className="filter-item" onClick={handleCategoryFilter}><span>Categories</span><span>⌄</span></li>
                  <div className="categories_filter">
                    {categories.map(category => (
                      <div key={category} className='category_item'>
                        <input
                          type="checkbox"
                          id={category}
                          name={category}
                          value={category}
                          onChange={() => handleCategoryChange(category)}
                          disabled={disabledCategories.includes(category)}
                        />
                        <label htmlFor={category} style={{ color: disabledCategories.includes(category) ? "#D3D3D3" : "black" }}>{category}</label>
                      </div>
                    ))}
                  </div>
              </ul>
          </div>
          <div className="bestseller-product-list">
              <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {products.map((product) => (
                          <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between w-full">
                                <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                            <button className="addToCartBtn">Add to cart</button>
                          </div>
                      ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default BestSeller