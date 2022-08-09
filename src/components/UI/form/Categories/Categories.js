import React from "react";
import PropTypes from "prop-types";
import styles from "./Categories.module.scss";

/**
 * Component for category selector
 * @param {object} props.categories object with list of category states
 * @param {object} props.categoryLabels object with labels for the category states
 * @param {number} props.selected category that is selected
 * @param {function} props.onCategoryChange function to call when category is changed (when a category is clicked)
 * @returns JSX
 */
function Categories(props) {
  return (
    <React.Fragment>
      {/* map through the categories and create a button toggle for each one */}
      {Object.keys(props.categories).map((category, index) => (
        // category contains one value of the categories object
        // can index the props.categoryLabels object with this value
        <button
          onClick={() => props.onCategoryChange(props.categories[category])}
          key={index + "category"}
          className={
            props.categories[category] === props.selected
              ? `${styles.formCategory}  ${styles.formCategorySelected}`
              : `${styles.formCategory} ${styles.formCategoryDeselected}`
          }
        >
          {/* get the button label from props.categoryLabels*/}
          {props.categoryLabels[props.categories[category]]}
        </button>
      ))}
    </React.Fragment>
  );
}

Categories.propTypes = {
  categories: PropTypes.objectOf(PropTypes.number).isRequired,
  categoryLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  selected: PropTypes.number.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
