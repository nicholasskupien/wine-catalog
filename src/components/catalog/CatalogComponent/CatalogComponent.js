// TODO work on props validation
/* eslint-disable react/prop-types */

import React from "react";
import styles from "./CatalogComponent.module.scss";
import { importAll } from "../../../constants/common";
// import Label from "../../UI/Label/Label";

// Wine Catalog Component
function CatalogComponent(props) {
  //Import all images from the folder
  const images = importAll(
    require.context("../../../assets/images/catalog", false, /\.png/)
  );

  // const details = props.details.map((detail) => {
  //   if (detail === props.nameDetail) {
  //     return (
  //       <React.Fragment>
  //         <p className={styles.OverlayDetail}>{props.item[detail]}</p>
  //         <hr></hr>
  //       </React.Fragment>
  //     );
  //   } else {
  //     return (
  //       <React.Fragment>
  //         <p className={styles.OverlayDetail}>{props.item.name}</p>
  //         <hr></hr>
  //       </React.Fragment>
  //     );
  //   }
  // });
  //
  //       [CATEGORY_STATE.C]
  //       <Label label="Category"></Label>

  return (
    <a onClick={() => props.onClick(props.item)}>
      <div className={styles.CatalogComponent}>
        <button className={styles.ButtonAddToCart}>
          <span>+</span>
        </button>
        <span className={styles.Price}>
          {"$" + props.item.price.toFixed(2)}
        </span>
        <div className={styles.OverlayNameDetails}>
          {
            // details
          }
        </div>
        {/* load image with file name equal to item id */}
        <img src={images[props.item.id + ".png"]}></img>
      </div>
    </a>
  );
}

export default CatalogComponent;
