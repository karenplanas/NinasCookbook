import React from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import './StarRate.css'

const StarRate : React.FC = () => {
  return (
      <Rate 
        allowHalf 
        style={{ fontSize: 28 }}
        character={<i className="anticon anticon-star" />}
      />
  )
}

export { StarRate }