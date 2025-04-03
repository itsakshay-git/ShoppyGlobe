// Redux slice for checkout management.  
// Handles delivery info and order summary state.  
// Supports setting, clearing, and updating delivery details.  
// Stores order totals and cart items for final checkout.  
// Ensures data persistence during the checkout process.

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  deliveryInfo: {
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "UPI Payment",
  },
  orderSummary: {
    subtotal: 0,
    discount: 0,
    total: 0,
    cartItems: [],
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setDeliveryInfo: (state, action) => {
      state.deliveryInfo = action.payload;
    },
    clearDeliveryInfo: (state) => {
      state.deliveryInfo = initialState.deliveryInfo;
    },
    setOrderSummary: (state, action) => {
        state.orderSummary = action.payload;
      },
  },
});

export const { setDeliveryInfo, clearDeliveryInfo, setOrderSummary } = checkoutSlice.actions;
export default checkoutSlice.reducer;
