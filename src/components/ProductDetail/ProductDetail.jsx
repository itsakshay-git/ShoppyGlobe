/**
 * @component ProductDetail
 * @desc Displays detailed information about a single product, including its images, description, pricing, shipping info, and ratings. 
 * Allows the user to add the product to the cart and saves the product as a favorite. 
 * Also shows related products based on the product category.
 * @hooks 
 *   - useFetchProductDetail: Fetches the product details based on the product ID from the URL.
 *   - useFetchProducts: Fetches a list of all products for displaying related items.
 * @state
 *   - selectedImage: Stores the image currently selected for viewing.
 *   - isImageLoading: Tracks the loading state of the main product image.
 * @dispatch
 *   - addToCart: Adds the selected product to the cart.
 *   - showToast: Displays a toast notification with a success or error message.
 */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../redux/toastSlice";
import { addToCart } from "../../redux/cartSlice";
import favicon from '../../assets/icons/Favorite.png';
import discounticon from '../../assets/icons/Discount.png';
import warrantyicon from '../../assets/icons/Protect.png';
import shippingicon from '../../assets/icons/In Transit.png';
import stockicon from '../../assets/icons/Sell Stock.png';
import statusicon from '../../assets/icons/Check Mark.png';
import useFetchProductDetail from "../../hook/fetchProductDetail";
import useFetchProducts from "../../hook/useFetchProducts";
import ProductItem from "../ProductItem/ProductItem";
import Toast from "../Toast/Toast";
import "./productdetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);
  const { product, loading, error } = useFetchProductDetail(id, dispatch);
  const { products } = useFetchProducts();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
      setIsImageLoading(true);
    }
  }, [product]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(showToast({ message: "Product added to cart!", type: "success" }));
  };

  if (loading) return (<div className="loading-state"><div><div className="loader"></div></div></div>);
  if (error) return (<div className="loading-state"><p>Error: {error}</p></div>);

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-detail-container">
      {toast.message && (
        <Toast message={toast.message} type={toast.type} onClose={() => dispatch(showToast({ message: "", type: "" }))} />
      )}

      <div className="product-detail">
        <div className="product-image-wrapper">
          <div className="product-images">
            <div className="image-container">
              {isImageLoading && <div className="loader-container"><div className="loader"></div></div>}
              <img 
              className="main-image" 
              src={selectedImage} 
              alt={product.title}
              onLoad={() => setIsImageLoading(false)}
              style={{ display: isImageLoading ? "none" : "block" }}
              />
            </div>
            <div className="image-thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className={`sub-image ${selectedImage === img ? "selected" : ""}`}
                  onClick={() => { 
                    setSelectedImage(img);
                    setIsImageLoading(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="product-cat">
            <button>{product.category}</button>
          </div>
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="price">₹ {product.price}</p>
          <div className="add-n-save">
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="save-product"><img src={favicon} alt="" /></button>
          </div>
          <div className="product-description">
            <p className="description-title">Description</p>
            <p className="description">{product.description}</p>
          </div>
          <div className="shipping-info">
            <p className="description-title">Shipping</p>
            <div className="shipping-item-info">
              <div className="item">
                  <img className="shipping-icons" src={discounticon} alt="" />
                  <div>
                      <p>Discount</p>
                      <p className="value">{product.discountPercentage ? product.discountPercentage : "NA"}</p>
                  </div>
              </div>
              <div className="item">
                  <img className="shipping-icons" src={warrantyicon} alt="" />
                  <div>
                      <p>warranty</p>
                      <p className="value">{product.warrantyInformation ? product.warrantyInformation : "NA"}</p>
                  </div>
              </div>
              <div className="item">
                  <img className="shipping-icons" src={shippingicon} alt="" />
                  <div>
                      <p>Shipping</p>
                      <p className="value">{product.shippingInformation ? product.shippingInformation : "NA"}</p>
                  </div>
              </div>
              <div className="item">
                  <img className="shipping-icons" src={stockicon} alt="" />
                  <div>
                      <p>Stock</p>
                      <p className="value">{product.stock ? product.stock : "Not Available"}</p>
                  </div>
              </div>
              <div className="item">
                 <img className="shipping-icons" src={statusicon} alt="" />
                  <div>
                      <p>Availability Status</p>
                      <p className="value">{product.availabilityStatus ? product.availabilityStatus : "NA"}</p>
                  </div>
              </div>
            </div>
        </div>
        <div className="ratings-container">
          <h3 className="ratings-title">Ratings & Reviews</h3>
          <div className="ratings-header">
            <span className="rating-score">{product.rating} <span className="out-of">/5</span></span>
            <div className="rating-bar">
              <div className="stars">
                <span className="review-rating">
                    {"⭐".repeat(product?.rating)}
                </span>
              </div>
              <div className="bars">
                  <div className='bar full'></div>
                  <div className='bar mid'></div>
                  <div className='bar low'></div>
                  <div className='bar lowest'></div>
                  <div className="bar lowest"></div>
              </div>
            </div>
          </div>

          {product.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <strong>{review.reviewerName}</strong>
                <span className="review-rating">
                  {"⭐".repeat(review.rating)}
                </span>
              </div>
              <p className="review-comment">{review.comment}</p>
              <p className="review-email">{review.reviewerEmail}</p>
              <span className="review-date">23 May 2024</span>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div>
      <h3 className="suggestion-title">You Might Also Like</h3>
      <div className="related-products">
        {relatedProducts.map((related) => (
          <ProductItem key={related.id} product={related} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
