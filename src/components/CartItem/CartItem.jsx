/**
 * @component CartItem
 * @desc Displays an individual item in the cart, allowing for quantity adjustments (increment/decrement) and removal from the cart.
 * @param {Object} item - The product item to be displayed in the cart.
 * @param {string} item.id - The unique identifier for the product.
 * @param {string} item.title - The title of the product.
 * @param {number} item.price - The price of the product.
 * @param {string} item.thumbnail - The image URL for the product thumbnail.
 * @param {number} item.quantity - The quantity of the product in the cart.
 * @uses Redux (useDispatch) for dispatching actions to remove items or update their quantities in the cart.
 * @uses Redux (showToast) for displaying toast notifications when a product is removed from the cart.
 */


import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import deleteIcon from '../../assets/icons/Delete.png';
import { showToast } from "../../redux/toastSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    dispatch(showToast({ message: "Product removed from cart!", type: "error" }));
  };

  const handleUpdateCartItem = (id, add) => {
    dispatch(updateQuantity({ id, add }));
  };

  return (
    <div key={item.id} className="cart-item">
      <div className="cart-group">
        <div className="cart-img">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="cart-item-info">
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
        </div>
      </div>
      <div className="button-group">
        <div className="handle-quantity">
          <button
            className="cart-btn"
            onClick={() => handleUpdateCartItem(item.id, true)}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="cart-btn"
            onClick={() => handleUpdateCartItem(item.id, false)}
          >
            -
          </button>
        </div>
        <button
          className="cart-btn"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
