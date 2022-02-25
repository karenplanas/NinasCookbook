import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { InputTextField } from '../InputTextField/InputTextField'
import image from '../../assets/sign-up.jpg'
import './SignUpPage.css'
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen'

const SignUpPage: React.FC = () => {
  return (
    <LayoutFullScreen image={image}>
      <h3>Sign Up</h3>
      <InputTextField type="text" label="Full name *" name="name" />
      <InputTextField type="text" label="Userid / Email *" name="userid" />
      <InputTextField type="text" label="Password *" name="password" />
      <Button className="contained" name="Sign Up" />
      <p className='yes-account'>Already have an account? <Link to="/login"><span>Sign In</span></Link></p>
    </LayoutFullScreen>
  )
}

export {SignUpPage}