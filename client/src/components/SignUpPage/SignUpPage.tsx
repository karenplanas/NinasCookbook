import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import image from '../../assets/sign-up.jpg'
import './SignUpPage.css'

const SignUpPage: React.FC = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up-text'>
        <h2>Nina's Cookbook</h2>
        <h3>Sign Up</h3>
        <InputField className="input-field" type="text" label="Full name *" name="name" />
        <InputField className="input-field" type="text" label="Userid / Email *" name="userid" />
        <InputField className="input-field" type="text" label="Password *" name="password" />
        <Button className="contained" name="Sign Up"/>
        <p className='yes-account'>Already have an account ? <Link to="/login"><span>Sing In</span></Link></p>
      </div>
      <div className='sign-up-img'>
        <img src={image} alt="plate"/>
      </div>
    </div>
  )
}

export {SignUpPage}