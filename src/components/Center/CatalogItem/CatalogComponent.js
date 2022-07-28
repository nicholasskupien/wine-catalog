import React from 'react'
import styles from './CatalogComponent.module.scss'


// Taken from https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
// Import all images from a folder
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Wine Catalog Component
function CatalogComponent(props) {

  //Import all images from the folder
  const images = importAll(require.context('../../../assets/images/catalog', false, /\.png/));

  return (
    <a onClick={() => props.onClick(props.item)}>
      <div className={styles.CatalogComponent}>
        <button className={styles.ButtonAddToCart}><span>+</span></button>
        <span className={styles.Price}>{"$" + props.item.price}</span>
        <div className={styles.NameOverlay}>{props.item.name}</div>
        {/* load image with file name equal to item id */}
        <img src={images[props.item.id+".png"]}></img>
      </div>  
    </a>
  )
}

export default CatalogComponent