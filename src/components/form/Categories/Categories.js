// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import styles from "./Categories.module.scss";

// USAGE
// props.categories: object with list of category states
// props.categoryLabels: labels of categories object
// props.onCategoryChange: Change handler. clicking on a category will pass the [0] index of category (enum value) to the change handler

function Categories(props) {
  const categories = props.categories;
  const categoryLabels = props.categoryLabels;
  const selected = props.selected;

  // console.log(selected);

  return (
    <React.Fragment>
      {Object.keys(categories).map((category, index) => (
        // category contains one value of the categories object
        // can index the categoryLabels object with this value
        <button
          onClick={() => props.onCategoryChange(categories[category])}
          key={index + "category"}
          className={
            categories[category] === selected
              ? `${styles.formCategory}  ${styles.formCategorySelected}`
              : `${styles.formCategory} ${styles.formCategoryDeselected}`
          }
        >
          {categoryLabels[categories[category]]}
        </button>
      ))}
    </React.Fragment>
  );
}

export default Categories;
