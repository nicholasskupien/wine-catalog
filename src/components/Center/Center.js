import React, { Component } from 'react'
import './Center.css'

export class Center extends Component {
  render() {
    return (
      <div className='center-container'>{this.props.catalogList}</div>
    )
  }
}

export default Center