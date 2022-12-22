type CounterBtnProps = {
  label: string
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CounterBtn = ({ label, onClick }: CounterBtnProps): JSX.Element => {
  return (
    <div className='counter-btn' onClick={onClick}>
      <div className='child'>{label}</div>
    </div>
  )
}

export default CounterBtn
