import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux store for the shopping cart. Supports adding and removing from the cart
 * and aggregates price information when items are added to the cart
 */
export const shoppingCartSlice = createSlice({
  name: "cart",

  initialState: {
    cartAggregated: [],
    cartTotalPrice: 0,
  },

  reducers: {
    /**
     * Add an item to the aggregated cart
     * @param {*} state current state
     * @param {*} action action.payload: the entire CatalogItem with all fields from the catalog
     */
    addToCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartAggregated.findIndex(
        (i) => i.id === action.payload.id
      );

      // if the item added in the cart already exists in the aggregated cart then update values
      if (itemIndex > -1) {
        // add one to the quantity
        state.cartAggregated[itemIndex].quantity += 1;
        // add the cost of the item to the total price to maintain the running sum
        // no need to parseFloat as the totalPrice and unitPrice are both floats rounded to 2 decimal places
        state.cartAggregated[itemIndex].totalPrice +=
          state.cartAggregated[itemIndex].unitPrice;
        // console.log("updated ", cartAggregated[item.id]);
      }
      // if the item does not exist in the aggregated cart then create a new item with default values
      else {
        const newItem = {
          id: item.id,
          quantity: 1,
          description: item.name,
          // make sure numbers are rounded to 2 decimal places
          // order of operations: parse the price as a float, then rount to 2 deicmal places (return is a string), then parse the string as a float
          unitPrice: parseFloat(parseFloat(item.price).toFixed(2)),
          totalPrice: parseFloat(parseFloat(item.price).toFixed(2)),
        };
        state.cartAggregated.push(newItem);
        // console.log("pushed ", newItem);
      }

      // update the total price of the cart
      state.cartTotalPrice += item.price;
      // remove floating precision errors (round to 2 decimal places)
      state.cartTotalPrice = parseFloat(state.cartTotalPrice.toFixed(2));
    },

    /**
     * remove one item from aggregated cart. Includes all entries of that item.
     * @param {*} state current state
     * @param {*} action action.payload: the id of the item to remove
     */
    removeFromCart: (state, action) => {
      const itemIndex = state.cartAggregated.findIndex(
        (i) => i.id === action.payload
      );

      if (itemIndex > -1) {
        state.cartTotalPrice -= state.cartAggregated[itemIndex].totalPrice;
        // remove floating precision errors (round to 2 decimal places)
        state.cartTotalPrice = parseFloat(state.cartTotalPrice.toFixed(2));
        state.cartAggregated.splice(itemIndex, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
