import React, { useState } from 'react'
import './App.css'

function App (props) {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  return (
    <div>
      <p>
        現在の{name}は{price}です。
      </p>
      <button onClick={() => setPrice(price + 100)}>+100</button>
      <button onClick={() => setPrice(price - 100)}>-100</button>
      <button onClick={() => setPrice(props.price)}>reset</button>
      <input
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
      />
      <button onClick={() => setName(props.name)}>Namereset</button>
    </div>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
