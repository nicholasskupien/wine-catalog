import React, { Component } from 'react'
import './Center.css'
import { useSelector } from 'react-redux';

// Wine Catalog Container
function Center() {

  const catalog = useSelector(state => state.catalog.catalog);
  // console.log(catalog);

  return (
      // catalog.map(catalog)
      <div className='center-container'></div>
    )
  }
export default Center

