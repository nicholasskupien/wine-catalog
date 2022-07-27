import React, { Component } from 'react'
import FormCategories from './Form/FormCategories/FormCategories'
import FormDropdown from './Form/FormDropdown/FormDropdown'
import FormTextInput from './Form/FormTextInput/FormTextInput'
import Label from './Label/Label'
import Logo from './Logo/Logo'
import './Left.css'
import { setCategory, search, sort } from '../../features/catalog/catalogSlice'
import { useSelector, useDispatch } from 'react-redux';
import { CATEGORY_LABELS } from '../../assets/js/category'
import { SORT_BY, SORT_DIR } from '../../assets/js/sort'

// Filters, Search Bar, Sort, Logo
function Left() {

    const dispatch = useDispatch();

    // Change handler to send new selected category to redux store when they are changed
    const onCategoryChange = (newSelectedCategory) => dispatch(setCategory(newSelectedCategory));
    // Get category labels (enums) from file
    const categories = Object.entries(CATEGORY_LABELS);
    // Use redux to get the selected category. This will update
    var selectedCategory = useSelector(state => state.catalog.selectedCategory);

    // Change handler to send sort selection to redux store when it is changed
    const onSortChange = (newSortCategory) => dispatch(sort(newSortCategory));
    // Grab the sort enums
    const sortBy = Object.entries(SORT_BY);
    const sortDirection = Object.entries(SORT_DIR);
    // For each sort item, create a select option for up and down sort directions
    const dropdownItems = sortBy.map((sortBy, i) => (sortDirection.map((sortDirection, j) => (sortBy[1] + " " + sortDirection[1])))).flat();
    // For each sort item, create key value pairs for the paramater to sort by and the direction to sort by
    const dropdownPayloads = sortBy.map((sortBy, i) => (sortDirection.map((sortDirection, j) => ({sortBy: sortBy[0], sortDirection: sortDirection[0]})))).flat();
    // console.log(dropdownItems);
    // console.log(dropdownPayloads);

    // Change handler to send search input to redux store when it is changed
    const onSearchChange = (newSearch) => dispatch(search(newSearch));

    return (
      <div className='left-container'>
          <Logo></Logo>
          <hr></hr>
          <div className='form-container'>
            <div className='form-wrapper'>
                <Label label={"search"}></Label>
                <FormTextInput onChange={onSearchChange} placeholder={'Start typing a wine name...'}></FormTextInput>
            </div>
            <div className='form-wrapper'>
                <Label label={"sort by"}></Label>
                <FormDropdown onChange={onSortChange} dropdownItems={dropdownItems} dropdownPayloads={dropdownPayloads}></FormDropdown>
            <div className='form-wrapper'></div>
                <Label label={"category"}></Label>
                <FormCategories categories={categories} selected={selectedCategory} onCategoryChange={onCategoryChange}></FormCategories>
            </div>
          </div>
      </div>
    )
  }


export default Left
