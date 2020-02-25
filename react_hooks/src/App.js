import React, { useState, useEffect } from 'react'
import './App.css'

function App (props) {
  const [name, setName] = useState(props.name)
  const [state, setState] = useState(props)

  useEffect(() => {
    console.log('this is like componentDidMount or componentDidUpdate')
  })

  useEffect(() => {
    console.log('this is like componentDidMount')
  }, [])

  useEffect(() => {
    console.log('this callback is for name only')
  }, [name])

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
          setName(event.target.value)
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
