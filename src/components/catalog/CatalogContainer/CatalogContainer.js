import React from "react";
import styles from "./CatalogContainer.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CatalogComponent from "../CatalogComponent/CatalogComponent";
import { addToCart } from "../../../features/catalog/shoppingCartSlice";

/**
 * Container for wine catalog
 * @returns JSX
 */
function CatalogContainer() {
  const dispatch = useDispatch();

  const catalog = useSelector((state) => state.catalog.catalog);
  // console.log(catalog);

  // call 'addToCart' to the redux store and send the item that was clicked on
  const onClickAddToCart = (itemToAdd) => dispatch(addToCart(itemToAdd));

  return (
    <div className={styles.CenterContainer}>
      {/* map through each item from the catalog redux store and create a component for it */}
      {catalog.map((item) =>
        // if there is a hidden flag set (from category filtering or search) on the item then do not create it
        item.hiddenCategory || item.hiddenSearch ? (
          ""
        ) : (
          <CatalogComponent
            onClickAddToCart={onClickAddToCart}
            key={item.id}
            item={item}
          ></CatalogComponent>
        )
      )}
    </div>
  );
}

export default CatalogContainer;
