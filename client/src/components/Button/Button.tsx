import React from 'react';
import './Button.css';

interface Props {
  text: string;
  className: 'outlined' | 'contained' | 'cloudinary-button';
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export { Button };
