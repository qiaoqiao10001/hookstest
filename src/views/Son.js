import React, { Component } from 'react'
import context from '../context'
export default class Son extends Component {
  static contextType = context

  render () {
    return (
      <div>
        son组件
        {this.context.info}
      </div>
    )
  }
}

Son.contextType = context
