import {useState} from 'react';
import styles from './ShoppingCart.module.scss';
import {ICON_LEFT_CARET, ICON_RIGHT_CARET, ICON_CLOSE} from '../../constants/common';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/catalog/shoppingCartSlice';
import React from 'react'


function ShoppingCart() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);

    var cartAggregated = [];

    // create an 'aggregated' cart with totals for quantity and cost based off the cart state
    // TODO make this a part of this component's state
    if(cart.length >= 1){

        // cartAggregated = cart.reduce((a, b) => 
        //     a.set(b.id, (a.get(b.id) || 0) + 1), new Map);

        cart.forEach(item => {

            var itemIndex = cartAggregated.findIndex((i) => i.id === item.id);

            // if the item added in the cart already exists in the aggregated cart then update values
            if(itemIndex != -1){
                // add one to the quantity
                cartAggregated[itemIndex].quantity += 1;
                // add the cost of the item to the total price to maintain the running sum
                cartAggregated[itemIndex].totalPrice += cartAggregated[itemIndex].unitPrice;
                // round the total sum (TODO verify rounding 0.005 edge cases)
                cartAggregated[itemIndex].totalPrice = parseFloat(cartAggregated[itemIndex].totalPrice).toFixed(2);

                // console.log("updated ", cartAggregated[item.id]);
            }
            // if the item does not exist in the aggregated cart then create a new item with default values
            else {
                var newItem = {
                    id: item.id,
                    quantity: 1,
                    description: item.name,
                    unitPrice: item.price,
                    totalPrice: item.price,
                }
                cartAggregated.push(newItem);
                // console.log("pushed ", newItem);
            }
        });
    }

    console.log(cartAggregated, cartAggregated.length);


    const [shoppingCartOpen, setShoppingCartOpen] = useState(0);

    return (
        <div style={shoppingCartOpen?{right: "0em"}:{}} className={styles.shoppingCartContainer}>
            <button onClick={() => setShoppingCartOpen(!shoppingCartOpen)} className={styles.toggleCartButton}>
                <span>{shoppingCartOpen?ICON_RIGHT_CARET:ICON_LEFT_CARET}</span>
            </button>
            <div className={styles.cartHeader}></div>
            <table className={styles.cartTable}>
                <thead>
                    <tr>
                        <th></th>
                        <th>QTY</th>
                        <th style={{textAlign: "left"}}>Description</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {cartAggregated.map(item => (
                    <tr key={item.id}>
                        <td style={{fontWeight: "900"}}>{ICON_CLOSE}</td>
                        <td>{item.quantity}</td>
                        <td style={{textAlign: "left"}}>{item.description}</td>
                        <td>{"$" + item.unitPrice}</td>
                        <td>{"$" + item.totalPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.cartFooter}>

            </div>
        </div>
    )
}

export default ShoppingCart