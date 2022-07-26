import React, { Component } from 'react'
import FormCategories from './Form/FormCategories/FormCategories'
import FormDropdown from './Form/FormDropdown/FormDropdown'
import FormTextInput from './Form/FormTextInput/FormTextInput'
import Label from './Label/Label'
import Logo from './Logo/Logo'
import './Left.css'

// Filters, Search Bar, Sort, Logo
export class Left extends Component {
  render() {
    return (
      <div className='left-container'>
          <Logo></Logo>
          <hr></hr>
          <div className='form-container'>
            <div className='form-wrapper'>
                <Label label={"search"}></Label>
                <FormTextInput></FormTextInput>
            </div>
            <div className='form-wrapper'>
                <Label label={"sort by"}></Label>
                <FormDropdown></FormDropdown>
            <div className='form-wrapper'></div>
                <Label label={"category"}></Label>
                <FormCategories></FormCategories>
            </div>
          </div>
      </div>
    )
  }
}

export default Left