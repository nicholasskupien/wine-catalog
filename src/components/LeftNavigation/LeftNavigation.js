import React from "react";
import Categories from "../form/Categories/Categories";
import Dropdown from "../form/Dropdown/Dropdown";
import TextInput from "../form/TextInput/TextInput";
import Label from "../UI/Label/Label";
import Logo from "../branding/Logo/Logo";
import "./LeftNavigation.scss";
import { setCategory, search, sort } from "../../features/catalog/catalogSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  CATEGORY_STATE,
  CATEGORY_STATE_LABELS,
} from "../../constants/category";
import {
  SORT_STATE,
  SORT_DIRECTION,
  SORT_STATE_LABELS,
  SORT_DIRECTION_LABELS,
} from "../../constants/sort";

// Filters, Search Bar, Sort, Logo
function LeftNavigation() {
  const dispatch = useDispatch();

  // Change handler to send new selected category to redux store when they are changed
  const onCategoryChange = (newSelectedCategory) =>
    dispatch(setCategory(newSelectedCategory));

  // Get category labels (enums) from file
  // const categories = Object.keys(CATEGORY_STATE);
  // const categoryLabels = Object.entries(CATEGORY_STATE_LABELS);

  // Use redux to get the selected category. This will update
  const selectedCategory = useSelector(
    (state) => state.catalog.selectedCategory
  );

  // Change handler to send sort selection to redux store when it is changed
  const onSortChange = (newSortCategory) => dispatch(sort(newSortCategory));
  // Grab the sort enums
  // const sortState = Object.entries(CATEGORY_STATE);
  // const sortDirection = Object.entries(SORT_DIRECTION);

  // create dropdown items and payloads to send once selected
  const dropdownItems = [];
  const dropdownPayloads = [];

  // populate dropdown items and payloads
  Object.keys(SORT_STATE).forEach((sortBy) =>
    Object.keys(SORT_DIRECTION).forEach((sortDirection) => {
      // For each sort item, create a select option for up and down sort directions
      const dropdownItem =
        SORT_STATE_LABELS[SORT_STATE[sortBy]] +
        " " +
        SORT_DIRECTION_LABELS[SORT_DIRECTION[sortDirection]];

      // For each sort item, create key value pairs for the paramater to sort by and the direction to sort by
      const dropdownPayload = {
        sortBy: SORT_STATE[sortBy],
        sortDirection: SORT_DIRECTION[sortDirection],
      };

      dropdownItems.push(dropdownItem);
      dropdownPayloads.push(dropdownPayload);
    })
  );

  // console.log(dropdownItems);
  // console.log(dropdownPayloads);

  // Change handler to send search input to redux store when it is changed
  const onSearchChange = (newSearch) => dispatch(search(newSearch));

  return (
    <div className="left-container">
      <Logo></Logo>
      <hr></hr>
      <div className="form-container">
        <div className="form-wrapper">
          <Label label={"search"} uppercase={true}></Label>
          <TextInput
            onChange={onSearchChange}
            placeholder={"Start typing a wine name..."}
          ></TextInput>
        </div>
        <div className="form-wrapper">
          <Label label={"sort by"} uppercase={true}></Label>
          <Dropdown
            onChange={onSortChange}
            dropdownItems={dropdownItems}
            dropdownPayloads={dropdownPayloads}
          ></Dropdown>
          <div className="form-wrapper"></div>
          <Label label={"category"} uppercase={true}></Label>
          <Categories
            categories={CATEGORY_STATE}
            categoryLabels={CATEGORY_STATE_LABELS}
            selected={selectedCategory}
            onCategoryChange={onCategoryChange}
          ></Categories>
        </div>
      </div>
    </div>
  );
}

export default LeftNavigation;
