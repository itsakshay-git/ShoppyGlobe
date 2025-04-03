/**
 * @component Home
 * @desc Displays products, top products, and category filters with dynamic selection.
 * @uses Redux (useSelector, useDispatch) for state management.
 * @uses Custom hook (useFetchProducts) for fetching product data.
 * @uses Toast notifications for user feedback.
 * @uses ProductItem, Header, TopProduct, Toast components.
 */

import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header'
import TopProduct from '../components/TopProducts/TopProduct';
import { hideToast } from '../redux/toastSlice';
import useFetchProducts from '../hook/useFetchProducts';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../components/Toast/Toast';
import ProductItem from '../components/ProductItem/ProductItem';

const Home = () => {
  const { products } = useFetchProducts();
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("groceries");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categories = ["beauty", "fragrances", "furniture", "groceries"];


    useEffect(() => {
      dispatch(hideToast());
    }, [dispatch]);
  
    useEffect(() => {
      let filtered = products;
      filtered = filtered.filter(product => product.category === selectedCategory);
  
      setFilteredProducts(filtered);
    }, [products, selectedCategory]);
  
  
  return (
    <div>
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => dispatch(hideToast())}
        />
      )}
      <Header />
      <TopProduct />
      <h2 className="all-product-title">Our All Products</h2>

      <div className="filter-container">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-list-wrapper">
          <ul className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
            ) : (
              <p>No products found.</p>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Home