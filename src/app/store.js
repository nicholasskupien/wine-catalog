import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from '../features/catalog/catalogSlice'

export default configureStore({
  reducer: {
      catalog: catalogReducer
  },
})