import React, { Component, createRef } from 'react'

export default class Dl extends Component {
  state = {
    open: true
  }
  dl = createRef()

  handleClick (name) {
    console.log(name)
    this.props.changeOpen(name)

  }
  componentDidMount () {
    console.log(this.dl.current, '===')
  }
  render () {
    const { dlData, openName, name } = this.props
    return (
      <ul ref={this.dl} className={"friend-group " + (openName === name ? "expanded" : "")} >
        <li onClick={this.handleClick.bind(this, openName === name ? '' : name)}>{dlData.title}
          {dlData.list.map(item => {
            return <span key={item.name}>{item.name}</span>
          })}</li>
      </ul>
    )
  }
}
