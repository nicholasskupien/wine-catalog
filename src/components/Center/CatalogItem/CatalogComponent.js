import React from 'react'
import styles from './CatalogComponent.module.css'


// Taken from https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

function CatalogComponent(props) {

  const images = importAll(require.context('../../../assets/images/catalog', false, /\.png/));

  return (
    <div className={styles.CatalogComponent}>
      <img src={images[props.item.id+".png"]}></img>
    </div>  
  )
}

export default CatalogComponent