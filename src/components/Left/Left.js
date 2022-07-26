import React, { Component } from 'react'
import FormCategories from './Form/FormCategories/FormCategories'
import FormDropdown from './Form/FormDropdown/FormDropdown'
import FormTextInput from './Form/FormTextInput/FormTextInput'
import Label from './Label/Label'
import Logo from './Logo/Logo'

export class Left extends Component {
  render() {
    return (
      <div style={{width: "20em"}}>
          <Logo></Logo>
          <hr></hr>
          <Label></Label>
          <FormTextInput></FormTextInput>
          <br></br>
          <Label></Label>
          <FormDropdown></FormDropdown>
          <br></br>
          <Label></Label>
          <FormCategories></FormCategories>
      </div>
    )
  }
}

export default Left