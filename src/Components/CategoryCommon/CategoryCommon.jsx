import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../../Pages/BestSeller/bestSeller.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function CategoryCommon({category}) {
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
    debugger
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
            <h2 className='bestseller-filter-heading'>{category} Bags</h2>
            <ul className='filters'>
                <li className="filter-item">Filter:</li>
                {(selectedCategories.length>0 || priceFilter.from!=null || priceFilter.to!=null)  ? 
                  <div className="filters_applied">
                    {priceFilter.from!=null || priceFilter.to!=null ? <span className="item_applied">{`Rs. ${priceFilter.from ? priceFilter.from : 0} - ${priceFilter.to ? priceFilter.to : 1950}`} <FontAwesomeIcon icon={faXmark} onClick={handlePriceRemove} style={{cursor: "pointer"}}/></span> : "" }
                    {selectedCategories.map(selectedCategory => (
                      <span className="item_applied" key={selectedCategory}>{selectedCategory} <FontAwesomeIcon icon={faXmark} onClick={()=>{handleCategoryRemove(selectedCategory)}} style={{cursor: "pointer"}}/></span>
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
            <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div class="flex flex-1 justify-between sm:hidden">
                  <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                  <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                </div>
                <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm text-gray-700">
                      Showing
                      <span class="font-medium">1</span>
                      to
                      <span class="font-medium">10</span>
                      of
                      <span class="font-medium">97</span>
                      results
                    </p>
                  </div>
                  <div>
                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Previous</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                      <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                      <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                      <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                      <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                      <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Next</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default CategoryCommon