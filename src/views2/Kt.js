import React, { useState } from 'react'

export default function Kt () {
  const [data, setdata] = useState({ name: '微信读书', age: 12 });
  return (
    <div>
      {
        data.age
      }
      {
        data.name
      }
      <button onClick={() => setdata({ ...data, name: '腾讯读书' })}>setName</button>
    </div>
  )
}
