import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./CatalogComponent.module.scss";
import {
  ICON_CARET_DOWN,
  ICON_CARET_UP,
  importAll,
} from "../../../constants/common";
import Price from "../../UI/Price/Price";

/**
 * Component for wine catalog. Each component is an item displayed in the catalog.
 * @param {} props.item Item to display in the catalog. List of required fields in proptypes
 * @returns JSX
 */
function CatalogComponent(props) {
  // import all images from the folder
  const images = importAll(
    require.context("../../../assets/images/catalog", false, /\.png/)
  );

  // local state for when the details are open/closed
  const [detailsOpen, setDetailsOpen] = useState(0);

  // for each detail to show on the catalog item create necissary jsx
  const details = props.item.detailsList.map((detail, i) => {
    return (
      <div key={i + props.item.id} className={styles.OverlayDetail}>
        <p className={styles.OverlayLabel}>{detail.label}</p>
        <p className={styles.OverlayValue}>{detail.value}</p>
      </div>
    );
  });

  return (
    <div
      className={
        // set classname on entire catalog component when details are open (for animations and behaviour)
        detailsOpen
          ? `${styles.DetailsOpen} ${styles.CatalogComponent}`
          : styles.CatalogComponent
      }
    >
      {/* top header: add to cart button and price */}
      <div className={styles.TopHeader}>
        <button
          className={styles.ButtonAddToCart}
          onClick={() => props.onClickAddToCart(props.item)}
        >
          <span>+</span>
        </button>

        <Price
          price={props.item.price}
          // hide price when details are open
          style={detailsOpen ? { opacity: "0" } : {}}
        ></Price>
      </div>
      {/* overlay footer: name, caret to open/close detail state, details */}
      <div className={styles.OverlayFooter}>
        <div className={styles.OverlayName}>
          <p className={styles.OverlayValue}>{props.item.name}</p>

          <button
            className={styles.OverlayButton}
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            <span>{detailsOpen ? ICON_CARET_DOWN : ICON_CARET_UP}</span>
          </button>
        </div>
        {/* hidden section, details state */}
        <div className={styles.OverlayHidden}>
          <hr></hr>
          {/* put the details jsx in the hidden section of the catalog item */}
          {details}
        </div>
      </div>
      {/* background image */}
      {/* load image with file name equal to item id */}
      <img src={images[props.item.id + ".png"]}></img>
    </div>
  );
}

CatalogComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    detailsList: PropTypes.arrayOf(PropTypes.object),
    hiddenCategory: PropTypes.bool,
    hiddenSearch: PropTypes.bool,
  }),
  onClickAddToCart: PropTypes.func,
};

export default CatalogComponent;
