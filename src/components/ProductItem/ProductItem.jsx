/**
 * @component ProductItem
 * @desc Represents a single product item in a list. Displays the product's image, title, price, rating, and provides buttons to view the product's detail and add it to the cart.
 * Handles adding a product to the cart and showing a success toast notification.
 * @props
 *   - product (object): The product object containing details like `id`, `thumbnail`, `title`, `price`, `rating`, and `category`.
 * @dispatch
 *   - addToCart: Dispatches the action to add the product to the cart.
 *   - showToast: Dispatches a success message showing that the product was added to the cart.
 */


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { showToast } from "../../redux/toastSlice";
import { Link } from "react-router";
import './productItem.css';


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(showToast({ message: "Product added to cart!", type: "success" }));
  };

  return (
    <div className="product">
      <div className="product-image">
      <img src={product.thumbnail} alt="thumbnail" />
      </div>
      <div className="product-title-info">
      <p className="product-title">{product.title}</p>
      <p className="product-price">${product.price}</p>
      </div>
      <p className="product-rating">⭐ {product.rating}</p>   
      <div className="product-buttons">
      <Link to={`/product/${product.id}`} className="view-btn">
      <button className="view-btn-1">View</button>
      </Link>
      <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
