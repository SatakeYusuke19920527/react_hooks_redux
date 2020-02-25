import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const increment = () => {
    setCount(count + 1)
    setText('plus 1 (oAo)')
  }

  const increment2 = () => {
    setCount(counting => {
      setCount(counting + 1)
    })
    setText('increment2')
  }

  const decrement = () => {
    setCount(count - 1)
    setText('minus 1 (oAo)')
  }

  const decrement2 = () => {
    setCount(counting => {
      setCount(counting - 1)
    })
    setText('decrement2')
  }

  const reset = () => {
    setCount(0)
  }

  const multiple = () => {
    setCount(num => num * 2)
  }

  const three = () => {
    setCount(previous => {
      return previous % 3 === 0 ? previous / 3 : previous
    })
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>いいね！：{count}</p>
        <p>{text}</p>
        <button onClick={() => increment()}>count+1</button>
        <button onClick={() => decrement()}>count-1</button>

        <button onClick={() => increment2()}>count+1</button>
        <button onClick={() => decrement2()}>count-1</button>
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => multiple()}>x2</button>
        <button onClick={() => three()}>3の倍数の時だけ3でわる</button>
      </div>
    </div>
  )
}

export default App
