import React, { Component } from 'react'
import './FormDropdown.css'

export class FormDropdown extends Component {
  
  render() {

    // list of fields to sort by
    const sortItems = ["Name", "Category", "Volume", "Price", "Country", "Producer"];
    
    // could simplify this further
    // const sortDirection = ["up", "down"];

    return (
      <select name="sort" className="form-dropdown">
          {/* For each sort item, create a select option for up and down sort directions */}
          {sortItems.map((sortItem) => (
            <React.Fragment>
                {/* sort item with up arrow */}
                <option value = {sortItem.toLowerCase + " up"}>{sortItem + " \u2191"}</option>
                {/* sort item with down arrow */}
                <option value = {sortItem.toLowerCase + " down"}>{sortItem + " \u2193"}</option>
                <hr></hr>
            </React.Fragment>
          ))}
      </select>
    )
  }
}

export default FormDropdown