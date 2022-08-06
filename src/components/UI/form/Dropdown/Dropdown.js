// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import "./Dropdown.css";

// USAGE
// props.dropdownItems: Localized list of items to populate dropdown with
// props.dropdownPayloads: List of payloads that correspond with dropdownItems. These two arrays must be the same length.
// props.onChange: Change handler. When a dropdown item is selected the payload at the same index is sent to the change handler.

function Dropdown(props) {
  return (
    <select
      name="sort"
      className="form-dropdown"
      onChange={(e) => props.onChange(props.dropdownPayloads[e.target.value])}
    >
      {props.dropdownItems.map((dropdownItem, i) => (
        <option value={i} key={i}>
          {dropdownItem}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
