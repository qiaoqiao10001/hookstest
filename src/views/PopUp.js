import React, { Component } from 'react'

export default class PopUp extends Component {
  render () {
    let { title, children } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    )
  }
}
