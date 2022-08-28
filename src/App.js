import React, { Component, createRef } from 'react'
// import Count from './views/Count'
// import MyComponent from './views/MyComponent'
// import MyForm from './views/MyForm'
// import Counter from './features/counter/Counter'
import Dl from './views/Dl'
import data from './data'
import { Provider } from './context'
import Child from './views/Child'
import Son from './views/Son'
import PopUp from './views/PopUp'
import Kt from './views2/Kt'
export default class App extends Component {
  state = { openName: '' }
  changeOpen = (name) => {
    this.setState({
      openName: name
    })
  }
  componentDidMount () {
    console.log(this.Dl.current, '$$$')
  }
  Dl = createRef()
  render () {
    let { openName } = this.state
    return (
      <>
        {/* <MyForm></MyForm>
        <MyComponent.DatePicker color="blue"></MyComponent.DatePicker>
        <Count></Count> */}
        {/* <div>App</div>
        <Counter></Counter> */}
        <div className='friend-list'>
          {
            Object.keys(data).map(itemName => {
              return <Dl
                ref={this.Dl}
                name={itemName}
                openName={openName}
                changeOpen={this.changeOpen}
                key={itemName}
                dlData={data[itemName]} ></Dl>
            })
          }
        </div>

        <Provider value={{
          info: '主题白色'
        }}>
          <Child />
        </Provider>
        <Provider value={{
          info: '主题黑色色'
        }}>
          <Son />
        </Provider>
        <PopUp title="自定义弹框">

          <div> 这里是弹框内容1
            <ul>
              <li>列表1</li>
            </ul>
          </div>
        </PopUp>
        <Kt />
      </>
    )
  }
}
