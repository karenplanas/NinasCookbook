import React from 'react'
import { Button } from '../Button/Button'
import { InputTextField } from '../InputTextField/InputTextField'
import './SignInPage.css'
import image from '../../assets/sign-in.jpg'
import { Link } from 'react-router-dom'
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen'

const SignInPage : React.FC = () => {
  return (
    <LayoutFullScreen image={image}>
      <h3>Sign In</h3>
      <InputTextField type="text" label="Userid / Email *" name="userid" />
      <InputTextField type="text" label="Password *" name="password" />
      <div className='remember-me'>
        <InputTextField type="checkbox" label="Remember me" name="password" />
        <p>Forgot password ?</p>
      </div>
      <Button className="contained" name="Sign In"/>
      <p className='no-account'>Don't have an account yet? <Link to="/sign-up"><span>Sign Up</span></Link></p>
    </LayoutFullScreen>
  )

}

export {SignInPage}