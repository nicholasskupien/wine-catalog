import React from "react";
import Categories from "../form/Categories/Categories";
import Dropdown from "../form/Dropdown/Dropdown";
import TextInput from "../form/TextInput/TextInput";
import Label from "../form/Label/Label";
import Logo from "../branding/Logo/Logo";
import "./LeftNavigation.scss";
import { setCategory, search, sort } from "../../features/catalog/catalogSlice";
import { useSelector, useDispatch } from "react-redux";
import { CATEGORY_LABELS } from "../../constants/category";
import { SORT_BY, SORT_DIR } from "../../constants/sort";

// Filters, Search Bar, Sort, Logo
function LeftNavigation() {
  const dispatch = useDispatch();

  // Change handler to send new selected category to redux store when they are changed
  const onCategoryChange = (newSelectedCategory) =>
    dispatch(setCategory(newSelectedCategory));
  // Get category labels (enums) from file
  const categories = Object.entries(CATEGORY_LABELS);
  // Use redux to get the selected category. This will update
  const selectedCategory = useSelector(
    (state) => state.catalog.selectedCategory
  );

  // Change handler to send sort selection to redux store when it is changed
  const onSortChange = (newSortCategory) => dispatch(sort(newSortCategory));
  // Grab the sort enums
  const sortBy = Object.entries(SORT_BY);
  const sortDirection = Object.entries(SORT_DIR);
  // For each sort item, create a select option for up and down sort directions
  const dropdownItems = sortBy
    .map((sortBy) =>
      sortDirection.map((sortDirection) => sortBy[1] + " " + sortDirection[1])
    )
    .flat();
  // For each sort item, create key value pairs for the paramater to sort by and the direction to sort by
  const dropdownPayloads = sortBy
    .map((sortBy) =>
      sortDirection.map((sortDirection) => ({
        sortBy: sortBy[0],
        sortDirection: sortDirection[0],
      }))
    )
    .flat();
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
          <Label label={"search"}></Label>
          <TextInput
            onChange={onSearchChange}
            placeholder={"Start typing a wine name..."}
          ></TextInput>
        </div>
        <div className="form-wrapper">
          <Label label={"sort by"}></Label>
          <Dropdown
            onChange={onSortChange}
            dropdownItems={dropdownItems}
            dropdownPayloads={dropdownPayloads}
          ></Dropdown>
          <div className="form-wrapper"></div>
          <Label label={"category"}></Label>
          <Categories
            categories={categories}
            selected={selectedCategory}
            onCategoryChange={onCategoryChange}
          ></Categories>
        </div>
      </div>
    </div>
  );
}

export default LeftNavigation;
