import React from "react";
import Categories from "../UI/form/Categories/Categories";
import Dropdown from "../UI/form/Dropdown/Dropdown";
import TextInput from "../UI/form/TextInput/TextInput";
import Label from "../UI/form/Label/Label";
import Logo from "../UI/branding/Logo/Logo";
import styles from "./LeftNavigation.module.scss";
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

/**
 * Container for several components:
 * Logo, search (Label, TextInput), sort (Label, Dropdown), categories (Label, Categories)
 * @returns JSX
 */
function LeftNavigation() {
  // use with redux
  const dispatch = useDispatch();

  // change handler to send new selected category to redux store when they are changed
  const onCategoryChange = (newSelectedCategory) =>
    dispatch(setCategory(newSelectedCategory));

  // use redux to get the selected category. This will update when onSortChange is called
  const selectedCategory = useSelector(
    (state) => state.catalog.selectedCategory
  );

  // change handler to send sort selection to redux store when it is changed
  const onSortChange = (newSortCategory) => dispatch(sort(newSortCategory));

  // create dropdown items and payloads to send once selected
  const dropdownItems = [];
  const dropdownPayloads = [];

  // populate dropdown items and payloads using sort enums
  Object.keys(SORT_STATE).forEach((sortBy) =>
    Object.keys(SORT_DIRECTION).forEach((sortDirection) => {
      // for each sort item, create a select option for up and down sort directions
      const dropdownItem =
        SORT_STATE_LABELS[SORT_STATE[sortBy]] +
        " " +
        SORT_DIRECTION_LABELS[SORT_DIRECTION[sortDirection]];

      // for each sort item, create key value pairs for the paramater to sort by and the direction to sort by
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

  // change handler to send search input to redux store when it is changed
  const onSearchChange = (newSearch) => dispatch(search(newSearch));

  return (
    <div className={styles.LeftContainer}>
      {/* add the logo at the top */}
      <div className={styles.LogoWrapper}>
        <Logo></Logo>
      </div>
      <hr></hr>
      <div className={styles.FormContainer}>
        {/* search bar and label */}
        <div className={styles.FormWrapper}>
          <Label label={"search"} uppercase={true}></Label>
          <TextInput
            onSearchChange={onSearchChange}
            placeholder={"Start typing a wine name..."}
          ></TextInput>
        </div>
        {/* sorting dropdown */}
        <div className={styles.FormWrapper}>
          <Label label={"sort by"} uppercase={true}></Label>
          <Dropdown
            onDropdownChange={onSortChange}
            dropdownItems={dropdownItems}
            dropdownPayloads={dropdownPayloads}
          ></Dropdown>
        </div>
        {/* category selector */}
        <div className={styles.FormWrapper}>
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
