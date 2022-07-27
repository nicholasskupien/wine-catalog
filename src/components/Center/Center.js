import React, { Component } from 'react'
import './Center.css'
import { useSelector, useDispatch } from 'react-redux';
import CatalogComponent from './CatalogItem/CatalogComponent';
import { addToCart, removeFromCart } from '../../features/catalog/shoppingCartSlice';

// Wine Catalog Container
function Center() {

  const dispatch = useDispatch();

  const catalog = useSelector(state => state.catalog.catalog);
  // console.log(catalog);

  const onClickAddToCart = (itemToAdd) => dispatch(addToCart(itemToAdd));

  return (
    <div className='center-container'>
      {catalog.map(item => (
        (item.hiddenCategory || item.hiddenSearch) ? "" : <CatalogComponent onClick={onClickAddToCart} key={item.id} item={item}></CatalogComponent>
      ))}
    </div>
  )
}

export default Center

