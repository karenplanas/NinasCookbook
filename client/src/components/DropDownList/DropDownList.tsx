import React from 'react'
import clsx from 'clsx'
import './DropDownList.css'

interface Props {
  className?: string,
  label?: string,
  name?: string
  options: {
    value: string,
    label: string
    selected?: boolean
  }[]
}
const DropDownList: React.FC<Props> = ({className, label, name, options}) => {
  return (
    <div className='DropDownList-withLabel'>
      { label && <label htmlFor={name}>{label}</label> }
      <div className={clsx(className, "DropDownList-wrapper")}>
        <select className="DropDownList">
          { options.map((o) => (
            <option selected={o.selected} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
export { DropDownList }