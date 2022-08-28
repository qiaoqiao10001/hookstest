import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Child extends Component {
  render () {
    return (
      <Consumer>
        {
          (val) => {
            return <p>{val.info}</p>
          }
        }
      </Consumer>

    )
  }
}
