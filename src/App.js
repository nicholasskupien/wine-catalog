import React from "react";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import CatalogContainer from "./components/catalog/CatalogContainer/CatalogContainer";
import styles from "./App.module.scss";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className={styles.AppContainer}>
      <LeftNavigation></LeftNavigation>
      <CatalogContainer></CatalogContainer>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}

export default App;
