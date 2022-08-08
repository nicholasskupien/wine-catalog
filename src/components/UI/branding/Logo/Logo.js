import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../../../assets/images/wine.png";

/**
 * Component for the wine catalog logo
 * @returns JSX
 */
function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <div className={styles.LogoWrapper}>
        <img src={logo} alt="logo"></img>
      </div>
      <p className={styles.LogoHeading}>WINE</p>
      <p className={styles.LogoSubheading}>Catalog</p>
    </div>
  );
}

export default Logo;
