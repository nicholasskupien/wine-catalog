import { createSlice } from '@reduxjs/toolkit'

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const shoppingCartSlice = createSlice({
  name: 'cart',
  
  initialState: {
    cart: [],
  },

  reducers: {

    addToCart: (state, action) => {
        const item = action.payload;
        return {cart: [...state.cart, item]};
    },
    removeFromCart: (state, action) => {
        return state;
    }
  }
})

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer