import React, { useRef } from 'react'
import { useEffect } from 'react'
function ChangeTitle () {
  useEffect(() => {
    document.title = '改变了'
  })

  const btn = useRef(null)
  const handleClick = () => {
    console.log(btn)
    btn.current.innerHTML = '获取ref'
  }
  return (
    <>
      <h2>改变标题</h2>
      <button ref={btn} onClick={handleClick}>getREfs</button>
    </>

  )
}
export default ChangeTitle
//  class  extends Component {
//   render() {
//     return (
//       <div>changeTItle</div>
//     )
//   }
// }
