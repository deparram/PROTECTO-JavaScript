import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, image, qty}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      item.qty++;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.qty > 1) item.qty--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
