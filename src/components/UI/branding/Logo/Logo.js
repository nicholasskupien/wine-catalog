import React, { Component } from "react";
import "./Logo.scss";
import logo from "../../../../assets/images/wine.png";

export class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src={logo} alt="logo"></img>
        </div>
        <p className="logo-heading">WINE</p>
        <p className="logo-subheading">Catalog</p>
      </div>
    );
  }
}

export default Logo;
