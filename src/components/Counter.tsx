import React, { useState } from 'react'

import CounterBtn from './CounterBtn'
import CounterDisplay from './CounterDisplay'
import './Counter.css'

const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    setCount(count - 1)
  }

  const reset = (): void => {
    setCount(0)
  }

  return (
    <div className='counter-wrapper'>
      <CounterDisplay counter={count} />
      <CounterBtn label={'higher'} onClick={increment} />
      <CounterBtn label={'lower'} onClick={decrement} />
      <CounterBtn label={'reset'} onClick={reset} />
    </div>
  )
}

export default Counter
