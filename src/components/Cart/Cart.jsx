/**
 * @component Cart
 * @desc Displays the user's cart, allows for updating item quantities, removing items, and submitting the checkout form.
 * Handles validation of the delivery and payment information form, and displays a toast notification on errors.
 * @uses Redux (useSelector, useDispatch) for managing cart items, toast notifications, and checkout information.
 * @uses React Router (useNavigate) for navigation to product and checkout pages.
 * @uses useState for managing form data, error states, and form validation.
 * @uses Custom components (CartItem, Toast) for displaying cart items and toast messages.
 * @returns {JSX.Element} The cart page UI, including the cart summary, delivery form, payment options, and checkout button.
 */


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideToast, showToast } from "../../redux/toastSlice";
import { clearCart, removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { setDeliveryInfo, setOrderSummary } from "../../redux/checkoutSlice";
import CartItem from "../CartItem/CartItem";
import Toast from "../Toast/Toast";
import "./cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    address: "",
    paymentMethod: ""
  });


  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    dispatch(showToast({ message: "Product removed from cart!", type: "error" }));
  };

  const handleUpdateCartItem = (id, add) => {
    dispatch(updateQuantity({ id, add }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key] && key !== "paymentMethod") {
        newErrors[key] = "This field is required";
      }
    });
    if (!form.paymentMethod) {
      newErrors.paymentMethod = "Select a payment method";
    }
    if (cartItems.length === 0) {
      dispatch(showToast({ message: "Your cart is empty!", type: "error" }));
      return false;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!validateForm()) return;
    
    dispatch(setDeliveryInfo(form));
    dispatch(setOrderSummary({ subtotal, discount, total, cartItems }));
    dispatch(clearCart())

    navigate("/checkout");
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = cartItems.reduce((total, item) => total + (item.price * item.quantity * item.discountPercentage / 100), 0);
  const total = subtotal - discount;

// Hide toast when component mounts
  useEffect(() => {
    dispatch(hideToast()); 
  }, [dispatch]);


  return (
    <div className="cart-container">
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => dispatch(() => dispatch(hideToast()))} />}
        <div className="form-container">
          <div className="delivery-info">
            <p>Delivery Information</p> 
            <div className="grid-container">
              <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" value={form.name} onChange={handleChange} />
              {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name="mobile" id="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" value={form.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" placeholder="City" value={form.city} onChange={handleChange} />
                {errors.city && <p className="error">{errors.city}</p>}
              </div>

              <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" placeholder="State" value={form.state} onChange={handleChange} />
                {errors.state && <p className="error">{errors.state}</p>}
              </div>


              <div>
                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" id="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} />
                {errors.zip && <p className="error">{errors.zip}</p>}
              </div>

              <label htmlFor="address" className="full-width">Address</label>
              <div className="full-width">
                <textarea name="address" id="address" placeholder="Address" value={form.address} onChange={handleChange} className="full-width"></textarea>
              </div>
              {errors.address && <p className="error full-width">{errors.address}</p>}

            </div>
          </div>    
          <div className="payment-option-wrapper">
            <p>Payment Method</p> 
            <div className="full-width payment-option">
              <label htmlFor="upi" className="select-upi">
                <input className="upi-input" type="radio" name="paymentMethod" id="upi" value="UPI" onChange={handleChange} />
                UPI Payment
              </label>
              <label htmlFor="cod" className="select-cod">
                <input className="cod-input" type="radio" name="paymentMethod" id="cod" value="COD" onChange={handleChange} /> 
                  Cash on Delivery
              </label>
            </div>
          </div>    
          {errors.paymentMethod && <p className="error full-width">{errors.paymentMethod}</p>}
        </div>

        <div className="cart-summary">
          {/* <p>Cart Summary</p> */}

          {cartItems.length === 0 ? (
            <>
            <p>Cart Summary</p>
            <div className="empty-cart">
              <p>There is no cart item. Please select a cart item before checkout.</p>
              <button onClick={() => navigate("/product")} className="go-to-products">
                Go to Products
              </button>
            </div>
            </>
          ) : (
            <>
              <div className="cart-wrapper">
              <p>Cart Summary</p>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="summary-group">
                <div className="sub-total">
                  <p>Subtotal</p>
                  <p>₹ {subtotal.toFixed(2)}</p>
                </div>
                <div className="discount">
                  <p>Discount</p>
                  <p>₹ {discount.toFixed(2)}</p>
                </div>
                <div className="total">
                  <h3>Total</h3>
                  <h3>₹ {total.toFixed(2)}</h3>
                </div>
                <button onClick={handleCheckout} className="checkout-button">Check Out</button>
              </div>
            </>
          )}
        </div>
    </div>
  );
};

export default Cart;
