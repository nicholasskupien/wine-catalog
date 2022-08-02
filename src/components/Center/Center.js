import React from "react";
import "./Center.scss";
import { useSelector, useDispatch } from "react-redux";
import CatalogComponent from "./CatalogItem/CatalogComponent";
import { addToCart } from "../../features/catalog/shoppingCartSlice";

// Wine Catalog Component Container
function Center() {
  const dispatch = useDispatch();

  const catalog = useSelector((state) => state.catalog.catalog);
  // console.log(catalog);

  // call 'addToCart' to the redux store and send the item that was clicked on
  const onClickAddToCart = (itemToAdd) => dispatch(addToCart(itemToAdd));

  return (
    <div className="center-container">
      {catalog.map((item) =>
        // If there is a hidden flag set (from category filtering or search) on the item then do not render that item
        item.hiddenCategory || item.hiddenSearch ? (
          ""
        ) : (
          <CatalogComponent
            onClick={onClickAddToCart}
            key={item.id}
            item={item}
          ></CatalogComponent>
        )
      )}
    </div>
  );
}

export default Center;
