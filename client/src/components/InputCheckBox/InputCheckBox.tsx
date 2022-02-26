import React, { useState } from 'react'
import './InputCheckBox.css'
import checkmark from '../../assets/checkmark.svg'

interface Props {
  name: string
  label: string
}

const InputCheckBox: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(false)
  return (
    <label className="InputCheckBox" onClick={() => setChecked(!checked)} htmlFor={props.name}>{props.label}
      <input type="checkbox" name={props.name} checked={checked} onChange={console.log}/>
      <span className='InputCheckBox-box'>
        <img src={checkmark} alt='checkmark' />
      </span>
    </label>
  )
}

export {InputCheckBox}