import React from 'react';
import clsx from 'clsx';
import './Button.css';

interface Props {
  text: string;
  className: 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ icon, text, className, ...props }) => {
  return <button {...props} className={clsx(className, { 'with-icon': !!icon })}>{icon}{text}</button>;
};

export { Button };
