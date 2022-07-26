import React, { Component } from 'react'

export class FormDropdown extends Component {
  
  render() {

    // list of fields to sort by
    const sortItems = ["Name", "Category", "Volume", "Price", "Country", "Producer"];
    
    // could simplify this further
    const sortDirection = ["up", "down"];

    return (
      <select name="sort" id="sort" style={{width: "100%"}}>
          {/* For each sort item, create a select option for up and down sort directions */}
          {sortItems.map((sortItem) => (
            <React.Fragment>
                <option value = {sortItem + "up"}>{sortItem + "&uarr;"}</option>
                <option value = {sortItem + "down"}>{sortItem + " &darr;"}</option>
                <hr></hr>
            </React.Fragment>
          ))}
      </select>
    )
  }
}

export default FormDropdown