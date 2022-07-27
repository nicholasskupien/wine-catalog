import React, { Component } from 'react'
import './FormDropdown.css'


// 
function FormDropdown(props) {

    return (
    <select name="sort" className="form-dropdown" onChange={(e) => props.onChange(props.dropdownPayloads[e.target.value])}>
        {props.dropdownItems.map((dropdownItem, i) => (
            <option value={i} key={i}>{dropdownItem}</option>
        ))}
    </select>
    )
}

export default FormDropdown
