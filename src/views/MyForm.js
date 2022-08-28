import React, { Component } from 'react'

export default class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      select: 'apple'
    }
  }
  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSelect (e) {
    this.setState({
      select: e.target.value
    })
    console.log(this.state)
  }
  render () {
    const { value } = this.state
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} value={value} />
        <select multiple={true} value={['b', 'c']} onChange={this.handleSelect.bind(this)}>
          <option value='lemo'>柠檬</option>
          <option value='apple'>苹果</option>
          <option value='banana'>香蕉</option>
        </select>
      </div>
    )
  }
}
