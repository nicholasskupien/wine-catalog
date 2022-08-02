import { createSlice } from "@reduxjs/toolkit";
import catalogListJson from "../../constants/catalog";
import { ALL_CATEGORY, DEFAULT_CATEGORY } from "../../constants/category";
import { DEFAULT_SORT, sortStrings, sortNumbers } from "../../constants/sort";

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const catalogSlice = createSlice({
  name: "catalog",

  initialState: {
    // This is the parsed list of catalog items
    // The list is in JSON form (key: object)
    // Object.entries parses the JSON into a 2D array with dimensions [key, object][item]
    catalog: Object.entries(catalogListJson)
      .map((catalogObject) => {
        // catalogObject[0] is the key of the catalog item
        // catalogObject[1] is the actual catalogItem object. Need to serialize this data on load.
        return {
          id: catalogObject[1].getId(),
          category: catalogObject[1].getCategory(),
          name: catalogObject[1].getName(),
          volume: catalogObject[1].getVolume(),
          price: catalogObject[1].getPrice(),
          country: catalogObject[1].getCountry(),
          producer: catalogObject[1].getProducer(),
          hiddenCategory: false,
          hiddenSearch: false,
        };
      })
      .sort((a, b) => {
        return sortStrings(a.name, b.name, DEFAULT_SORT.sortDirection);
      }),
    // set default categories and sort by/order
    selectedCategory: DEFAULT_CATEGORY,
    selectedSort: DEFAULT_SORT,
  },

  reducers: {
    // Sort the catalog based on the field to 'sortBy' and the 'sortDirection' to sort ascending or descending
    // action.payload.sortDirection: SORT_DIR contains the allowed inputs
    // action.payload.sortBy: SORT_BY contains the allowed inputs
    sort: (state, action) => {
      console.log(action);

      switch (action.payload.sortBy) {
        // TODO use SORT_BY enums for the switch statement
        case "NAME":
          state.catalog = state.catalog.sort((a, b) => {
            return sortStrings(a.name, b.name, action.payload.sortDirection);
          });
          break;
        case "CATEGORY":
          state.catalog = state.catalog.sort((a, b) => {
            return sortStrings(
              a.category,
              b.category,
              action.payload.sortDirection
            );
          });
          break;
        case "VOLUME":
          state.catalog = state.catalog.sort((a, b) => {
            return sortNumbers(
              a.volume,
              b.volume,
              action.payload.sortDirection
            );
          });
          break;
        case "PRICE":
          state.catalog = state.catalog.sort((a, b) => {
            return sortNumbers(a.price, b.price, action.payload.sortDirection);
          });
          break;
        case "COUNTRY":
          state.catalog = state.catalog.sort((a, b) => {
            return sortStrings(
              a.country,
              b.country,
              action.payload.sortDirection
            );
          });
          break;
        case "PRODUCER":
          state.catalog = state.catalog.sort((a, b) => {
            return sortStrings(
              a.producer,
              b.producer,
              action.payload.sortDirection
            );
          });
          break;
        default:
        //do nothing, no sort provided
      }
    },

    // Set the category to filter the catalog by
    // action.payload: CATEGORY_LABELS contains the allowed inputs
    setCategory: (state, action) => {
      // console.log(state.categories);
      // console.log(state, action);
      state.selectedCategory = action.payload;
      state.catalog = state.catalog.map((catalog) => {
        var hidden = true;

        // if the filtered catalog matches the wine in the catalog then don't hide the wine item
        // OR if the current category is the 'All Category' then regardless we show everything
        if (
          catalog.category === state.selectedCategory ||
          state.selectedCategory === ALL_CATEGORY
        ) {
          hidden = false;
        }

        return {
          id: catalog.id,
          category: catalog.category,
          name: catalog.name,
          volume: catalog.volume,
          price: catalog.price,
          producer: catalog.producer,
          country: catalog.country,
          hiddenCategory: hidden,
          hiddenSearch: catalog.hiddenSearch,
        };
      });
    },

    // Search the catalog with a string
    search: (state, action) => {
      console.log(action.payload);
      state.catalog = state.catalog.map((catalog) => {
        var hidden = true;

        // if the name of the wine in the catalog contains the search string then flag that item to be shown
        // OR if the search string is null then don't filter anything, so make sure nothing is hidden
        if (
          catalog.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          action.payload === ""
        ) {
          hidden = false;
        }

        return {
          id: catalog.id,
          category: catalog.category,
          name: catalog.name,
          volume: catalog.volume,
          price: catalog.price,
          producer: catalog.producer,
          country: catalog.country,
          hiddenCategory: catalog.hiddenCategory,
          hiddenSearch: hidden,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { sort, setCategory, search } = catalogSlice.actions;

export default catalogSlice.reducer;
