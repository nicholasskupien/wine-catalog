import React, { Component } from 'react'
import './FormTextInput.css'

export class FormTextInput extends Component {
  render() {
    return (
      <input type="text" className="form-text-input" placeholder='Start typing a wine name...'></input>
    )
  }
}

export default FormTextInput