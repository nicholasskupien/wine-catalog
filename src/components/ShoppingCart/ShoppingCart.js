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

  const cart = useSelector((state) => state.cart.cart);

  // TODO make these more 'private'? hidden from user
  var totalCartPrice = 0;
  var cartAggregated = [];

  // create an 'aggregated' cart with totals for quantity and cost based off the cart state
  // TODO make this a part of this component's state
  if (cart.length >= 1) {
    // cartAggregated = cart.reduce((a, b) =>
    //     a.set(b.id, (a.get(b.id) || 0) + 1), new Map);

    cart.forEach((item) => {
      const itemIndex = cartAggregated.findIndex((i) => i.id === item.id);

      // if the item added in the cart already exists in the aggregated cart then update values
      if (itemIndex != -1) {
        // add one to the quantity
        cartAggregated[itemIndex].quantity += 1;
        // add the cost of the item to the total price to maintain the running sum
        cartAggregated[itemIndex].totalPrice +=
          cartAggregated[itemIndex].unitPrice;
        // console.log("updated ", cartAggregated[item.id]);
      }
      // if the item does not exist in the aggregated cart then create a new item with default values
      else {
        const newItem = {
          id: item.id,
          quantity: 1,
          description: item.name,
          unitPrice: item.price,
          totalPrice: item.price,
        };
        cartAggregated.push(newItem);
        // console.log("pushed ", newItem);
      }

      // update the total price of the cart
      totalCartPrice += item.price;
    });
  }

  // console.log(cartAggregated, cartAggregated.length);

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
            <th></th>
            <th>QTY</th>
            <th style={{ textAlign: "left" }}>Description</th>
            <th>Unit Price</th>
            <th>Amount</th>
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
              {/* round the prices to 2 decimal points. Fixes floating point precision errors */}
              <td>{"$" + parseFloat(item.unitPrice).toFixed(2)}</td>
              <td>{"$" + parseFloat(item.totalPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>{"Total Amount"}</div>
        <div className={styles.cartTotal}>
          {"$" + parseFloat(totalCartPrice).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
