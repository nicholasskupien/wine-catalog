import React, { Component } from 'react'
import './FormCategories.css'

export class FormCategories extends Component {
  render() {

    // \u0341 for e with upward accent
    const categories = ["All", "Red Wine", "White Wine", "Rose\u0341 Wine", "Champagne", "Sparkling Wine", "Dessert Wine", "Icewine", "Fortified Wine", "Specialty Wine"];
    var selected = "All";

    return (
      <React.Fragment>
        {categories.map((category, index) => (
          <React.Fragment key={index+'fragment'}>
              <div key={index+'category'} className={category == selected ? "form-category form-category-selected" : "form-category form-category-deselected"}>{category}</div>
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  }
}

export default FormCategories