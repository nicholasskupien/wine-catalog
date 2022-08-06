// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import { useState } from "react";
import styles from "./CatalogComponent.module.scss";
import {
  ICON_CARET_DOWN,
  ICON_CARET_UP,
  importAll,
} from "../../../constants/common";
import Price from "../../UI/Price/Price";
// import Label from "../../UI/Label/Label";

// Wine Catalog Component
function CatalogComponent(props) {
  //Import all images from the folder
  const images = importAll(
    require.context("../../../assets/images/catalog", false, /\.png/)
  );

  console.log(props.details);

  const [detailsOpen, setDetailsOpen] = useState(0);

  const details = props.details.map((detail, i) => {
    // console.log(detail);
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
        detailsOpen
          ? `${styles.DetailsOpen} ${styles.CatalogComponent}`
          : styles.CatalogComponent
      }
    >
      <div className={styles.TopHeader}>
        <button
          className={styles.ButtonAddToCart}
          onClick={() => props.onClick(props.item)}
        >
          <span>+</span>
        </button>
        {/* <span className={styles.Price}>{"$" + props.item.price.toFixed(2)}</span> */}
        <Price
          price={props.item.price}
          style={detailsOpen ? { opacity: "0" } : {}}
        ></Price>
      </div>
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
        <div className={styles.OverlayHidden}>
          <hr></hr>
          {details}
        </div>
      </div>
      {/* load image with file name equal to item id */}
      <img src={images[props.item.id + ".png"]}></img>
    </div>
  );
}

export default CatalogComponent;
