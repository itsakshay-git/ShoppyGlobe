/**
 * @component Header
 * @desc Displays the header section of the website with a banner, customer reviews, and product categories for exploration.
 * Includes links to various product categories and a call-to-action button for exploring the exclusive collection.
 * @uses React Router (Link) for navigation to product pages such as beauty, groceries, and fragrances.
 */

import React from 'react';
import { Link } from 'react-router';
import usersicon from '../../assets/icons/Users.png';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import './header.css';


const Header = () => {
  return (
    <div>
      <div className='deals-banner'>
        <div className='deal-title'>
        <p>In this season, find the best 🔥</p>
        <h1>Exclusive collection <br /> for everyone</h1>
        <Link to={'/product'}>
          <button className='banner-btn'>
            Explore Now
          </button>
        </Link>
        </div>
        <div className='deals-image'>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="explore-categories-title">
        <p>Access to high-Quality <br /> Eco-Friendly products <br /> and Services</p>
        <div>
          <div className='customer-review'>
            <div className='customers-icon'><img src={usersicon} alt="" /></div>
            <div className='happy-customer'>
              <span>500+</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='explore-categories'>
        <div className='explore-category-item category-item-1'>
            <button>
              <Link to={'/products/beauty'} className='link-btn'>
                Explore
              </Link>
            </button>
          <span>Beauty Products</span>
        </div>

        <div className='explore-category-item category-item-2'>
          <button>
            <Link to={'/products/groceries'} className='link-btn'>
              Explore
            </Link>
          </button>
          <span>Groceries Products</span>
        </div>

        <div className='explore-category-item category-item-3'>
          <button>
            <Link to={'/products/fragrances'} className='link-btn'>
              Explore
            </Link>
          </button>
          <span>Fragrances Products</span>
        </div>
      </div>
    </div>
  )
}

export default Header