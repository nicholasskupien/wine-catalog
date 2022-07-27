import React, { Component } from 'react'
import './Center.css'
import { useSelector } from 'react-redux';
import CatalogComponent from './CatalogItem/CatalogComponent';

// Wine Catalog Container
function Center() {

  const catalog = useSelector(state => state.catalog.catalog);
  // console.log(catalog);

  return (
    <div className='center-container'>
      {catalog.map(item => (
        (item.hiddenCategory || item.hiddenSearch) ? "" : <CatalogComponent key={item.id} item={item}></CatalogComponent>
      ))}
    </div>
  )
}

export default Center

