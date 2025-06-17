// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state: No product selected at first
const initialState = {
  selectedProduct: [], // Will store { Prod_name, Price, img, etc. }
};

// Create a "slice" (a piece of Redux state + actions)
const productSlice = createSlice({
  name: 'product', // Name for debugging
  initialState,
  reducers: {
    // Action: When a product is clicked
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload; // Save the product
    },
    // Action: When closing the modal
    clearSelectedProduct: (state) => {
      state.selectedProduct = []; // Reset selection
    },
  },
});

// Export actions to use in components
export const { selectProduct, clearSelectedProduct } = productSlice.actions;

// Export reducer to add to Redux store
export default productSlice.reducer;