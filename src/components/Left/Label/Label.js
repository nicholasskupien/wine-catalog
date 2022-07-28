import React, { Component } from 'react'
import './Label.scss'

export class Label extends Component {
  render() {
    return (
      <label className='form-label'><h4>{this.props.label.toUpperCase()}</h4></label>
    )
  }
}

export default Label