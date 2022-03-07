import React from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import './StarRate.css'

interface Props {
  onChange?: (value:number) => void
  value?: number
  disabled?: boolean
  size?: number
}

const StarRate : React.FC<Props> = ({ onChange, value, disabled, size = 28 }) => {
  return (
      <Rate 
        allowHalf 
        disabled={ disabled }
        style={{ fontSize: size }}
        character={<i className="anticon anticon-star" />}
        onChange={onChange}
        value={value}
      />
  )
}

export { StarRate }