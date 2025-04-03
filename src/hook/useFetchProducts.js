/**
 * @hook useFetchProducts
 * @desc Fetches a list of products from an external API and manages loading, error, and product state.
 * @returns {Object} - Returns an object containing the products list, loading state, and error message (if any).
 * @uses Axios for fetching the list of products from an external API.
 */

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
