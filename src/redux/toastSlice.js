// Redux slice for managing toast notifications.  
// Provides actions to show and hide toast messages.  
// Stores message content and type (e.g., success, error).

import { createSlice } from "@reduxjs/toolkit";


const toastSlice = createSlice({
  name: "toast",
  initialState: { message: "", type: "" },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideToast: (state) => {
      state.message = "";
      state.type = "";
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
