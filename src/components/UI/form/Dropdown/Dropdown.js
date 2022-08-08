// TODO work on props validation

import React from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";

/**
 * Component for dropdowns
 * @param {array} props.dropdownItems An array of strings to populate the dropdown with
 * @param {array} props.dropdownPayloads When a dropdown item is selected, the payload at the index of the selected dropdownItem is sent through the function: props.onChange. This array must be the same length as props.dropdownItems
 * @param {function} props.onChange Change handler function. When a dropdownItem is selected, the payload at the index of the selected dropdownItem is sent.
 * @returns JSX
 */
function Dropdown(props) {
  // Throw error if the length of the items and payloads do not match
  if (props.dropdownItems.length !== props.dropdownPayloads.length) {
    throw new TypeError(
      "props.dropdownItems length and props.dropdownPayloads length do not match"
    );
  }

  return (
    <select
      name="sort"
      className={styles.FormDropdown}
      onChange={(e) =>
        props.onDropdownChange(props.dropdownPayloads[e.target.value])
      }
    >
      {props.dropdownItems.map((dropdownItem, i) => (
        <option value={i} key={i}>
          {dropdownItem}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Payload can be any array as long as it matches the length of dropdownItems
  dropdownPayloads: PropTypes.array.isRequired,
  onDropdownChange: PropTypes.func.isRequired,
};

export default Dropdown;
