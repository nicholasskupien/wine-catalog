import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from '../features/catalog/catalogSlice'
import shoppingCartReducer from '../features/catalog/shoppingCartSlice'


export default configureStore({
  reducer: {
      catalog: catalogReducer,
      cart: shoppingCartReducer,
  },
})