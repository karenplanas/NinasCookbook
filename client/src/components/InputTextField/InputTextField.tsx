import React from 'react'
import './InputTextField.css'

interface Props {
  label?: string
  name?: string
  value?: string
  type?: string
  rows?: number
  placeholder?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const InputTextField : React.FC<Props> = (props) => {
  return (
    <div className={`${props.className} InputTextField`}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {
        props.rows ? 
          <textarea {...props} rows={props.rows} ></textarea> :
          <input {...props} type={props.type || 'text'}></input>
      }
    </div>
  )
}

export {InputTextField}