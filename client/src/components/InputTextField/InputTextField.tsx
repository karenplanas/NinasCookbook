import React from 'react'
import './InputTextField.css'

interface Props {
  label: string
  name: string
  value?: string
  type?: string
  rows?: number
}

const InputTextField : React.FC<Props> = (props) => {
  return (
    <div className='InputTextField'>
      <label htmlFor={props.name}>{props.label}</label>
      {
        props.rows ? 
        <textarea name={props.name} rows={props.rows} value={props.value}></textarea> :
          <input type={props.type || 'text'} name={props.name} value={props.value}></input>
 
      }
    </div>
  )
}

export {InputTextField}