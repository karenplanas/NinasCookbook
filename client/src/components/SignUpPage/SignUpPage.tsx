import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import image from '../../assets/sign-up.jpg'
import './SignUpPage.css'
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen'

const SignUpPage: React.FC = () => {
  return (
    <LayoutFullScreen image={image}>
      <h3>Sign Up</h3>
      <InputField className="input-field" type="text" label="Full name *" name="name" />
      <InputField className="input-field" type="text" label="Userid / Email *" name="userid" />
      <InputField className="input-field" type="text" label="Password *" name="password" />
      <Button className="contained" name="Sign Up" />
      <p className='yes-account'>Already have an account? <Link to="/login"><span>Sign In</span></Link></p>
    </LayoutFullScreen>
  )
}

export {SignUpPage}