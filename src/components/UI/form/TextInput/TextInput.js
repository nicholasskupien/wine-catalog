// TODO work on props validation
import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

/**
 * Component for text input
 * @param {string} props.placeholder localized string containing hint text for the input
 * @param {function} props.onSearchChange Change handler that passes the value of the field input whenever it is changed
 * @returns JSX
 */
function TextInput(props) {
  return (
    <input
      onInput={(e) => props.onSearchChange(e.target.value)}
      type="text"
      className={styles.TextInput}
      placeholder={props.placeholder}
    ></input>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  placeholder: "Enter a value...",
};

export default TextInput;
