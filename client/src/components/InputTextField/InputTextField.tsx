import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import './InputTextField.css'

type Props = Partial<UseFormRegisterReturn> & {
  label?: string
  value?: string
  type?: string
  rows?: number
  placeholder?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

//https://react-hook-form.com/get-started/#Integratinganexistingform

const InputTextField = React.forwardRef<HTMLInputElement, Props>(({ className, label, rows, type, name, ...props }, ref) => {
  return (
    <div className={`${className} InputTextField`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input {...props} ref={ref as React.LegacyRef<HTMLInputElement>} type={type || 'text'} name={name} />
    </div>
  )
})

type InputTextAreaProps = Props & {
  rows?: number
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaProps>(({ className, label, rows, type, name, ...props }, ref) => {
  return (
    <div className={`${className} InputTextField`}>
      {label && <label htmlFor={name}>{label}</label>}
      {
        <textarea {...props} ref={ref as unknown as React.LegacyRef<HTMLTextAreaElement>} rows={rows} name={name} />
      }
    </div>
  )
})

export {InputTextField, InputTextArea}