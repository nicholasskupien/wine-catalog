import React, { Component } from 'react'
import styles from './FormCategories.module.css'
import CATEGORY_LABELS from '../../../../assets/js/category';
import { setCategory } from '../../../../features/catalog/catalogSlice';
import { useSelector, useDispatch } from 'react-redux';

function FormCategories() {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.catalog.categories);
  var selected = useSelector(state => state.catalog.selectedCategory);

  console.log(selected);

  return (
    <React.Fragment>
      {categories.map((category, index) => (
        // category[0] is the enum, all caps category
        // category[1] is the localized category
        <React.Fragment key={index+'fragment'}>
            <button onClick={() => dispatch(setCategory(category[0]))} key={index+'category'} className={category[0] == selected ? `${styles.formCategory}  ${styles.formCategorySelected}` : `${styles.formCategory} ${styles.formCategoryDeselected}`}>{category[1]}</button>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default FormCategories
