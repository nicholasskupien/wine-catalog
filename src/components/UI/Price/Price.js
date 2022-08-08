import React from "react";
import PropTypes from "prop-types";
import styles from "./Price.module.scss";

/**
 * Component for price. Used to display currency with a distinct style reminiscent of Earthbound
 * @param {number} props.price The price to display
 * @param {object} props.style Optional object including inline styles for the price component container. One use for this is to show and hide the price container
 * @returns
 */
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

Price.propTypes = {
  style: PropTypes.object,
  price: PropTypes.number.isRequired,
};

Price.defaultProps = {
  style: "",
};

export default Price;
