import { useState } from "react";
import styles from "./ShoppingCart.module.scss";
import {
  ICON_LEFT_CARET,
  ICON_RIGHT_CARET,
  ICON_CLOSE,
} from "../../constants/common";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/catalog/shoppingCartSlice";
import React from "react";

function ShoppingCart() {
  const dispatch = useDispatch();

  const cartAggregated = useSelector((state) => state.cart.cartAggregated);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

  const [shoppingCartOpen, setShoppingCartOpen] = useState(0);

  return (
    <div
      style={shoppingCartOpen ? { right: "0em" } : {}}
      className={styles.shoppingCartContainer}
    >
      <button
        onClick={() => setShoppingCartOpen(!shoppingCartOpen)}
        className={styles.toggleCartButton}
      >
        <span>{shoppingCartOpen ? ICON_RIGHT_CARET : ICON_LEFT_CARET}</span>
      </button>
      <div className={styles.cartTitle}>Shopping Cart</div>
      <div className={styles.cartHeader}></div>
      {/* shopping cart table */}
      <table className={styles.cartTable}>
        {/* headers */}
        <thead>
          <tr>
            <th style={{ width: "1%" }}></th>
            <th style={{ width: "5%" }}>QTY</th>
            <th style={{ textAlign: "left" }}>Description</th>
            <th style={{ width: "15%" }}>Unit Price</th>
            <th style={{ width: "15%" }}>Amount</th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {/* loop through aggregated cart and generate the table */}
          {cartAggregated.map((item) => (
            <tr key={item.id}>
              {/* Just noticed the validate dom nesting here */}
              <td style={{ fontWeight: "900" }}>
                <a
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className={styles.cartRemove}
                >
                  {ICON_CLOSE}
                </a>
              </td>
              <td>{item.quantity}</td>
              <td style={{ textAlign: "left" }}>{item.description}</td>
              {/* round the prices to 2 decimal points. Fixes floating point precision errors. 
              Not necessary (cart store is already rounded) but good edge case coverage*/}
              <td>{"$" + parseFloat(item.unitPrice).toFixed(2)}</td>
              <td>{"$" + parseFloat(item.totalPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>{"Total Amount"}</div>
        <div className={styles.cartTotal}>
          {"$" + parseFloat(cartTotalPrice).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
