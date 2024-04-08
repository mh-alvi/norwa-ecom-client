// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [], // Initial state for products (empty array)
  reducers: {
    setProducts: (state, action) => {
      return action.payload; // Set products based on fetched data
    },
    // Add more reducer functions here if needed
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
