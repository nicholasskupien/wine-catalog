import React from "react";
import PropTypes from "prop-types";
import styles from "./Label.module.scss";

/**
 * Component for label. To be used as a label for other form components
 * @param {boolean} props.uppercase boolean flag that if true, converts the label to uppercase
 * @param {string} props.label string for the label
 * @returns JSX
 */
function Label(props) {
  return (
    <label className={styles.FormLabel}>
      <h4>{props.uppercase ? props.label.toUpperCase() : props.label}</h4>
    </label>
  );
}

Label.propTypes = {
  uppercase: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Label.defaultProps = {
  uppercase: false,
};

export default Label;
