import React from 'react'
import './InputField.css'

interface Props {
  label: string
  name: string
  value?: string
  className: string
  type: string
}

const InputField : React.FC<Props> = (Props) => {
  return (
    <div className={Props.className}>
      <label htmlFor={Props.name}>{Props.label}</label>
      <input type={Props.type} name={Props.name} value={Props.value}></input>
    </div>
  )
}

export {InputField}