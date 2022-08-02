// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import "./FormTextInput.css";

// USAGE
// props.placeholder: localized string containing hint text for the input
// props.onChange: Change handler. Will pass the value of the field input whenever it is changed to the handler.

function FormTextInput(props) {
  return (
    <input
      onInput={(e) => props.onChange(e.target.value)}
      type="text"
      className="form-text-input"
      placeholder={props.placeholder}
    ></input>
  );
}

export default FormTextInput;
