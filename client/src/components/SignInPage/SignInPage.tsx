import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './SignInPage.css';
import image from '../../assets/sign-in.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutFullScreen } from '../LayoutFullScreen/LayoutFullScreen';
import { InputCheckBox } from '../InputCheckBox/InputCheckBox';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { User } from '../../interfaces/User';
import { useUserContext } from '../../contexts/UserContext';

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { user, login } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    login(data);
  };

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <LayoutFullScreen image={image}>
      <h3>Sign In</h3>
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <InputTextField
          type="text"
          label="Email *"
          errorMessage={errors.password?.message}
          {...register('email', { required: 'This field is required' })}
        />
        <InputTextField
          type="password"
          label="Password *"
          errorMessage={errors.password?.message}
          {...register('password', { required: 'This field is required' })}
        />
        <div className="remember-me">
          <InputCheckBox name="remember-me" label="Remember me" />
          <p>Forgot password ?</p>
        </div>
        <Button className="contained" name="Sign In" type="submit" />
      </form>
      <p className="no-account">
        Don't have an account yet?{' '}
        <Link to="/sign-up">
          <span>Sign Up</span>
        </Link>
      </p>
    </LayoutFullScreen>
  );
};

export { SignInPage };
