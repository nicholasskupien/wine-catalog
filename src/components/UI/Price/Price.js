/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Price.module.scss";

function Price(props) {
  const priceSplit = props.price.toFixed(2).split(".");

  return (
    <div className={styles.PriceContainer} style={props.style}>
      <span className={styles.DollarSign}>$</span>
      <span className={styles.Dollars}>{priceSplit[0]}</span>
      <span className={styles.Cents}>{priceSplit[1]}</span>
    </div>
  );
}

export default Price;
