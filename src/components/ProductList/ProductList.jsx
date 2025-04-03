/**
 * @component ProductList
 * @desc Displays a list of products with the ability to filter by category and search by title.
 * Users can select a category, search for products by name, and view filtered products.
 * @state
 *   - selectedCategory (string): The currently selected product category.
 *   - searchQuery (string): The search query entered by the user to filter products by title.
 *   - filteredProducts (array): A list of products filtered by the selected category and search query.
 * @hook
 *   - useFetchProducts: Custom hook to fetch the products list.
 *   - useDispatch: Redux hook to dispatch actions like hiding the toast notification.
 *   - useSelector: Redux hook to select the current toast state.
 * @params
 *   - category (string): The category parameter from the URL for filtering products (e.g., "beauty").
 * @dispatch
 *   - hideToast: Dispatches an action to hide the toast notification when the component mounts.
 */



import { useEffect, useState } from "react"; 
import Toast from "../Toast/Toast";
import ProductItem from "../ProductItem/ProductItem";
import useFetchProducts from "../../hook/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../redux/toastSlice";
import { useParams } from "react-router";
import '../ProductList/productList.css';

const ProductList = () => {
  const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, loading, error } = useFetchProducts();
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(hideToast());
  }, [dispatch]);

  useEffect(() => {
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory]);

  const handleSearch = () => {
    let filtered = products;
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (loading) return (<div className="loading-state"><div><div className="loader"></div></div></div>);
  if (error) return (<div className="loading-state"><p>Error: {error}</p></div>);

  return (
    <div className="product-list-container">
      {toast.message && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => dispatch(hideToast())}
        />
      )}

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
      
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
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
  );
};

export default ProductList;
