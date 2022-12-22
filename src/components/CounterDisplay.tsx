type CounterDisplayProps = {
  counter: number
}

const CounterDisplay = ({ counter }: CounterDisplayProps): JSX.Element => {
  return <p className='counter-display'>{counter}</p>
}

export default CounterDisplay
