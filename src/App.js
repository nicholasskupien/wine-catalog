import React from 'react';
import Left from './components/Left/Left';
import Center from './components/Center/Center';
import './App.css';
import catalogListJson from './assets/js/catalog';
import CatalogItem from './assets/js/catalogItem';
// import catalogImages from './assets/images/catalog'

function App() {

  // console.log(catalogListJson);

  // This is the parsed list of catalog items
  // The list is in JSON form (key: object)
  // Object.entries parses the JSON into a 2D array with dimensions [key, object][item]
  const catalogListObject = Object.entries(catalogListJson);
  console.log(catalogListObject);


  var parsedCatalogList = catalogListObject.map(catalogItem => {
    // catalogItem[0] is the key
    // catalogItem[1] is the object corresponding to the key
    return(
    <div key={catalogItem[0]} className='catalog-item'></div>
    );
  });

  return (
    <div className='app-container'>
      <Left></Left>
      <Center catalogList = {parsedCatalogList}></Center>
    </div>
  );
}

export default App;
