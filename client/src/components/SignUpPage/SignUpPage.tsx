import React from 'react'
import { useForm } from 'react-hook-form' // https://react-hook-form.com/get-started/#Integratinganexistingform
import { Link } from 'react-router-dom'

import './SignUpPage.css'
import image from '../../assets/sign-up.jpg'
import { Button } from '../Button/Button'
import { InputTextField } from '../InputTextField/InputTextField'
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen'
import { User } from '../../interfaces/User'
import { createUser } from '../../services/ApiClient'

const SignUpPage: React.FC = () => {
  const { register, handleSubmit } = useForm<User>();
  
  const onSubmit = (data: User) => {
    createUser(data)
  }

  return (
    <LayoutFullScreen image={image}>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextField 
          type="text" 
          label="First name *" 
          {...register("firstName", { required: true})}
        />
        <InputTextField 
          type="text" 
          label="Last name *" 
          {...register("lastName", {required: true})} 
        />
        <InputTextField 
          type="text" 
          label="Email *" 
          {...register("email", {required: true})}
        />
        <InputTextField 
          type="password" 
          label="Password *" 
          {...register("password", {required: true})} 
        />
        <Button className="contained" name="Sign Up" type="submit"/>
      </form>
      <p className='yes-account'>Already have an account? <Link to="/login"><span>Sign In</span></Link></p>
    </LayoutFullScreen>
  )
}

export { SignUpPage }