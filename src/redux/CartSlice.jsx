import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],      // array of {name, image, cost, quantity}
    numOfItems: 0,  // total quantity of all items
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1; // increment quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }

      state.numOfItems += 1; // total quantity increases
    },

    removeItem: (state, action) => {
      const name = action.payload; // just the item name
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        state.numOfItems -= existingItem.quantity; // subtract total quantity
        state.items = state.items.filter((item) => item.name !== name);
      }

      if (state.numOfItems < 0) state.numOfItems = 0;
    },

    incrementQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity += 1;
        state.numOfItems += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.numOfItems -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.numOfItems = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
