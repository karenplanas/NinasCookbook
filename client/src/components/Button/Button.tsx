import React from 'react';
import './Button.css';

interface Props {
  name: string;
  className: 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ name, ...props }) => {
  return <button {...props}>{name}</button>;
};

export { Button };
