/**
 * @hook useFetchProductDetail
 * @desc Fetches the details of a product from an external API based on the given product ID.
 * @param {string} id - The ID of the product to fetch details for.
 * @param {function} dispatch - The Redux dispatch function used to trigger actions (like showing a toast notification).
 * @returns {Object} - Returns an object containing the product details, loading state, and error message (if any).
 * @uses Axios for fetching product details from an external API.
 * @uses Redux (dispatch, showToast) for dispatching toast notifications in case of an error.
 */

import { useState, useEffect } from "react";
import axios from "axios";
import { showToast } from "../redux/toastSlice";

const useFetchProductDetail = (id, dispatch) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details.");
        setLoading(false);
        dispatch(showToast({ message: "Failed to fetch product", type: "error" }));
      }
    };

    if(id){
      fetchProductDetail();
    }

  }, [id, dispatch]);

  return { product, loading, error };
};

export default useFetchProductDetail;
