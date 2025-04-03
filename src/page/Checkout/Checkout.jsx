/**
 * @component Checkout
 * @desc Displays order confirmation, delivery information, and order summary after a successful order placement.
 * @uses Redux (useSelector) for retrieving checkout delivery information and order summary from the global state.
 * @uses React Router (useNavigate) for navigation to the product browsing page.
 * @uses Assets (checkoutIcon) for displaying an order success icon.
 * @uses CSS styles for layout and design of the checkout page.
 */


import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import checkoutIcon from '../../assets/icons/checkout.png'
import "./checkout.css";

const Checkout = () => {
  const deliveryInfo = useSelector((state) => state.checkout.deliveryInfo);
  const orderSummary = useSelector((state) => state.checkout.orderSummary);
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <div className="checkout-msg">
        <img src={checkoutIcon} alt="checkout-Icon" />
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with us. Your order has been placed.</p>
      </div>
      
      <div className="checkout-details">
        <h3>Delivery Information</h3>
        <p><strong>Name: </strong> {deliveryInfo.name}</p>
        <p><strong>Mobile: </strong> {deliveryInfo.mobile}</p>
        <p><strong>Email: </strong> {deliveryInfo.email}</p>
        <p><strong>Address: </strong> {deliveryInfo.address}, {deliveryInfo.city}, {deliveryInfo.state} - {deliveryInfo.zip}</p>
        <p><strong>Payment Method: </strong> {deliveryInfo.paymentMethod}</p>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {orderSummary.cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ₹{item.price}
            </li>
          ))}
        </ul>

        <div className="payment-summary">
          <h3>Payment Summary</h3>
          <p><strong>Subtotal:</strong> ₹ {orderSummary.subtotal.toFixed(2)}</p>
          <p><strong>Discount:</strong> -₹ {orderSummary.discount.toFixed(2)}</p>
          <p><strong>Total:</strong> ₹ {orderSummary.total.toFixed(2)}</p>
        </div>
        
        <button className="product-browse-btn" onClick={() => navigate("/")}>Browse More Products</button>
      </div>

    </div>
  );
};

export default Checkout;
