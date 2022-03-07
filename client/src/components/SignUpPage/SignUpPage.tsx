import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'; // https://react-hook-form.com/get-started/#Integratinganexistingform
import { Link, useNavigate } from 'react-router-dom';

import './SignUpPage.css';
import image from '../../assets/sign-up.jpg';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen';
import { User } from '../../interfaces/User';
import { useUserContext } from '../../contexts/UserContext';

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  const { user, createUser } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    createUser(data);
  };

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <LayoutFullScreen image={image}>
        <h3>Sign Up</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextField
          type="text"
          label="First name *"
          errorMessage={errors.firstName?.message}
          {...register('firstName', { required: 'This field is required' })}
        />

        <InputTextField
          type="text"
          label="Last name *"
          errorMessage={errors.lastName?.message}
          {...register('lastName', { required: 'This field is required' })}
        />

        <InputTextField
          type="text"
          label="Email *"
          errorMessage={errors.email?.message}
          {...register('email', { required: 'This field is required' })}
        />

        <InputTextField
          type="password"
          label="Password *"
          errorMessage={errors.password?.message}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Min length is 8'
            }
          })}
        />

        <Button className="contained" text="Sign Up" type="submit" />
      </form>
      <p className="yes-account"> 
        Already have an account?{' '}
        <Link to="/login"> 
          <span>Sign In</span>
        </Link>
      </p>
    </LayoutFullScreen>
  );
};

export { SignUpPage };
