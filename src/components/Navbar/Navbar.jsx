/**
 * @component Navbar
 * @desc Displays the navigation bar with links to the home page, product list, and cart. 
 * The cart icon shows the total number of items in the cart. 
 * Active links are highlighted based on the current route.
 * @uses React Router (Link, useLocation) for navigation and determining the active route.
 * @uses Redux (useSelector) for accessing the cart state and calculating the total number of items in the cart.
 */



import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router';
import carticon from '../../assets/icons/Cart.png'
import "./navbar.css"

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className='nav-bar'>
      <Link to={"/"} className='logo-1'>
        <p className='logo'>Shoppy<span>Globe</span></p>
      </Link>
      <ul className='nav-item'>
        <Link to="/" className={`nav-btn nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        <li className='home-link'>home</li>
        </Link>
        <Link to="/product" className={`nav-btn nav-link ${location.pathname === '/product' ? 'active' : ''}`}>
        <li className='product-link'>product list</li>
        </Link>
        <Link to="/cart" className='nav-link'>
        <li className='cart-link'><img src={carticon} alt="cart-icon" />{totalItems}</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar