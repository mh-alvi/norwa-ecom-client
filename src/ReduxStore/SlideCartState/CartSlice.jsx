// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [], // Initial state for the shopping cart (empty array)
  reducers: {
    addToCart: (state, action) => {
      // Add product to the cart based on action payload
      // Example: state.push(action.payload);
    },
    // Add more reducer functions as needed
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;