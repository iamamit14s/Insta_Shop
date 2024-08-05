import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ItemIndex = state.findIndex(
        (item) => item.id === action.payload.id);
      if (ItemIndex >= 0) {
        state[ItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const ItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state[ItemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const ItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0 && state[ItemIndex].quantity > 1) {
        state[ItemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
