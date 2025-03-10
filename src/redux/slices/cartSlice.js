import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    emptyCart:(state)=>{
      return []
    }
  },
});

export const { addToCart, removeFromCart, decrementQuantity ,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
