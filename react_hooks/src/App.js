import React, { useState } from 'react'
import './App.css'

function App (props) {
  const [state, setState] = useState(props)

  return (
    <div>
      <p>
        現在の{state.name}は{state.price}です。
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 100 })}>
        +100
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 100 })}>
        -100
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={state.name}
        onChange={event => {
          setState({ ...state, name: event.target.value })
        }}
      />
      <button onClick={() => setState({ ...state, name: props.name })}>
        Namereset
      </button>
    </div>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
