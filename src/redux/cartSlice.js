// Redux slice for cart management.  
// Provides actions to add, remove, update quantity, and clear cart items.  
// Ensures existing items update instead of duplicating.  
// Removes items when quantity reaches zero.  
// Used across the app for managing cart state.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if(existingItem && action.payload.add) {
        existingItem.quantity += 1;
      }else{
        existingItem.quantity -= 1;
        if (existingItem.quantity < 1) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
