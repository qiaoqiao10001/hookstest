import React, { Component } from 'react'

export default class count extends Component {
  constructor() {
    this.state = {
      number: 0
    }
  }
  render () {
    return (
      <div>
        <p>{number}</p>
        <button onClick={this.handleAdd.bind(this)}>+</button>
        <button onClick={this.handleMinus.bind(this)}>-</button>
      </div>
    )
  }
}
