/* eslint-disable no-undef */
import React from "react";
import "./CatalogContainer.scss";
import { useSelector, useDispatch } from "react-redux";
import CatalogComponent from "../CatalogComponent/CatalogComponent";
import { addToCart } from "../../../features/catalog/shoppingCartSlice";
import { SORT_STATE, SORT_STATE_LABELS } from "../../../constants/sort";

// Wine Catalog Component Container
function CatalogContainer() {
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
            // details={itemDetails}
            detailsLabels={Object.values(SORT_STATE_LABELS)}
            nameDetail={SORT_STATE.NAME.toString()}
          ></CatalogComponent>
        )
      )}
    </div>
  );
}

export default CatalogContainer;
