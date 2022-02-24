import React from 'react'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import './SignInPage.css'
import image from '../../assets/sign-in.jpg'

const SignInPage : React.FC = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in-text'>
        <h2>Nina's Cookbook</h2>
        <h3>Sign In</h3>
        <InputField className="input-field" type="text" label="Userid / Email *" name="userid" />
        <InputField className="input-field" type="text" label="Password *" name="password" />
        <div className='remember-me'>
          <InputField className="input-field checkbox" type="checkbox" label="Remember me" name="password" />
          <p>Forgot password ?</p>
        </div>
        <Button className="contained" name="Sign In"/>
        <p className='no-account'>Don't have an account yet ? Sing Up</p>
      </div>
      <div className='sign-in-img'>
        <img src={image} alt="plate"/>
      </div>
    </div>
  )

}

export {SignInPage}