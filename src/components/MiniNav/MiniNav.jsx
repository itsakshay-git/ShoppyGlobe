/**
 * @component MiniNav
 * @desc Displays a small navigation menu with links to the home page and product list page. 
 * Highlights the active link based on the current path.
 * @uses React Router (Link) for navigation between the home and product list pages.
 */


import React from 'react'
import { Link } from 'react-router'
import "./MiniNav.css";

const MiniNav = () => {
  return (
    <>
     <ul className='home-nav-item'>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        <li className='home-link'>home</li>
        </Link>
        <Link to="/product" className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`}>
        <li className='product-link'>product list</li>
        </Link>
      </ul>
    </>
  )
}

export default MiniNav