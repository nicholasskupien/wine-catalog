import { createSlice } from '@reduxjs/toolkit'
import catalogListJson from '../../assets/js/catalog';
import CatalogItem from '../../assets/js/catalogItem';
import CATEGORY_LABELS from '../../assets/js/category';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    // This is the parsed list of catalog items
    // The list is in JSON form (key: object)
    // Object.entries parses the JSON into a 2D array with dimensions [key, object][item]
    catalog: Object.entries(catalogListJson).map((catalogObject) => {
        // catalogObject[0] is the key of the catalog item
        // catalogObject[1] is the actual catalogItem object. Need to serialize this data on load.
        return({
        id: catalogObject[1].getId(),
        category: catalogObject[1].getCategory(),
        name: catalogObject[1].getName(),
        volume: catalogObject[1].getVolume(),
        price: catalogObject[1].getPrice(),
        category: catalogObject[1].getCategory(),
        producer: catalogObject[1].getProducer(),
        hidden: false
        })
    }),
    categories: Object.entries(CATEGORY_LABELS),
    // set selected category to the first category and choose enum label (this is 'ALL')
    selectedCategory: Object.entries(CATEGORY_LABELS)[0][0]
  },
  reducers: {
    sort: (state, action) => {
      
    },
    setCategory: (state, action) => {
        console.log(state.categories);
        console.log(state, action);
        state.selectedCategory = action.payload;
    },
    search: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { sort, setCategory, search } = catalogSlice.actions

export default catalogSlice.reducer