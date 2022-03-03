import React from 'react'

interface Props {
  color?: string, //color: #344054
  onClick?: React.MouseEventHandler, 
  className?:string
}

const DeleteIcon: React.FC<Props> = ({ color, onClick, className}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M0.5 6.50708H23.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 6.5V21.5C20.5 22.6046 19.6046 23.5 18.5 23.5H5.5C4.39543 23.5 3.5 22.6046 3.5 21.5V6.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 6.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H19.5C20.6046 3.5 21.5 4.39543 21.5 5.5V6.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3.5C9 1.84315 10.3431 0.5 12 0.5C13.6569 0.5 15 1.84315 15 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10V19.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 10V19.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 10V19.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export { DeleteIcon }