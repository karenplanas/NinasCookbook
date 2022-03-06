import React from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import './StarRate.css'

interface Props {
  onChange?: (value:number) => void
  defaultValue?: number
  disabled?: boolean
}

const StarRate : React.FC<Props> = ({ onChange, defaultValue, disabled }) => {
  return (
      <Rate 
        allowHalf 
        disabled={ disabled }
        style={{ fontSize: 28 }}
        character={<i className="anticon anticon-star" />}
        onChange={onChange}
        defaultValue={defaultValue}
      />
  )
}

export { StarRate }