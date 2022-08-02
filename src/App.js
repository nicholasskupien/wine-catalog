import React from "react";
import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import CatalogContainer from "./components/catalog/CatalogContainer/CatalogContainer";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="app-container">
      <LeftNavigation></LeftNavigation>
      <CatalogContainer></CatalogContainer>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}

export default App;
