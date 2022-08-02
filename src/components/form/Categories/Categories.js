// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import styles from "./Categories.module.scss";

// USAGE
// props.category: 2D array with [0] index containing the enum value of the category, and [1] index containing the localized value
// props.onCategoryChange: Change handler. clicking on a category will pass the [0] index of category (enum value) to the change handler

function Categories(props) {
  const categories = props.categories;
  var selected = props.selected;

  // console.log(selected);

  return (
    <React.Fragment>
      {categories.map((category, index) => (
        // category[0] is the enum, all caps category (payload)
        // category[1] is the localized category (label)
        <button
          onClick={() => props.onCategoryChange(category[0])}
          key={index + "category"}
          className={
            category[0] == selected
              ? `${styles.formCategory}  ${styles.formCategorySelected}`
              : `${styles.formCategory} ${styles.formCategoryDeselected}`
          }
        >
          {category[1]}
        </button>
      ))}
    </React.Fragment>
  );
}

export default Categories;
