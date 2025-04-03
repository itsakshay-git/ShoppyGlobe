// Redux store configuration using @reduxjs/toolkit.  
// Combines reducers for cart, toast notifications, and checkout.  

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import toastReducer from "./toastSlice";
import checkoutReducer from "./checkoutSlice";


const store = configureStore({
    reducer: {
        toast: toastReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
    },
});

export default store;