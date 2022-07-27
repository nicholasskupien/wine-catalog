import React from 'react';
import Left from './components/Left/Left';
import Center from './components/Center/Center';
import './App.css';
import catalogListJson from './assets/js/catalog';
import CatalogItem from './assets/js/catalogItem';
// import catalogImages from './assets/images/catalog'

function App() {

  return (
    <div className='app-container'>
      <Left></Left>
      <Center></Center>
    </div>
  );
}

export default App;
