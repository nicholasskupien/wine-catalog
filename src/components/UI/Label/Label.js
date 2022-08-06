// TODO work on props validation
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Label.scss";

export class Label extends Component {
  render() {
    return (
      <label className="form-label">
        <h4>
          {this.props.uppercase
            ? this.props.label.toUpperCase()
            : this.props.label}
        </h4>
      </label>
    );
  }
}

Label.propTypes = {
  uppercase: PropTypes.bool,
  label: PropTypes.string,
};

Label.defaultProps = {
  uppercase: false,
  label: "enter a value for label prop",
};

export default Label;
