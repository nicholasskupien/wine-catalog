import React, { Component } from 'react'
import './Label.css'

export class Label extends Component {
  render() {
    return (
      <label className='form-label'>{this.props.label.toUpperCase()}</label>
    )
  }
}

export default Label