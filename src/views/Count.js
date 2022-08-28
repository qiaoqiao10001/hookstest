
import React, { useState } from 'react'
import './style.css'
export default function Count () {
  let nums = []
  for (let i = 0; i < 10; i++) {
    nums.push(i)
  }
  const operate = ['+', '-', '*', '/']
  let [userInput, setUserInput] = useState(0)
  const handleClickNum = (e) => {
    console.log(e.target.innerHTML)
    let userInput
    userInput = e.target.innerHTML + userInput
    // debugger
    let userNum = parseInt(userInput)
    setUserInput(userNum)
    // console.log(userInput)
  }
  const [initNum, setstate] = useState(nums);
  return (
    <div >
      <div className='userInput'>{userInput}</div>
      {
        nums.map(item => {
          return <span className='count' onClick={handleClickNum}>{item}</span>
        })
      }
      <hr />
      {
        operate.map(item => {
          return <span className='count'>{item}</span>
        })
      }
    </div>
  )
}