import { createSlice } from "@reduxjs/toolkit";

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const shoppingCartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
  },

  reducers: {
    // action.payload is one item with all fields from the catalog
    addToCart: (state, action) => {
      const item = action.payload;
      return { cart: [...state.cart, item] };
    },
    // action.payload is id of the item to remove
    // eslint-disable-next-line no-unused-vars
    removeFromCart: (state, action) => {
      // TODO Impliment remove from cart
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
