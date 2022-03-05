import React from 'react';

interface Props {
  color?: string;
  onClick?: React.MouseEventHandler;
  className: string;
}

const MenuIcon: React.FC<Props> = ({ color, onClick, className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 6.5C20.5 7.05228 20.0523 7.5 19.5 7.5H4.5C3.94772 7.5 3.5 7.05228 3.5 6.5V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H19.5C20.0523 4.5 20.5 4.94772 20.5 5.5V6.5Z"
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 12.5C20.5 13.0523 20.0523 13.5 19.5 13.5H4.5C3.94772 13.5 3.5 13.0523 3.5 12.5V11.5C3.5 10.9477 3.94772 10.5 4.5 10.5H19.5C20.0523 10.5 20.5 10.9477 20.5 11.5V12.5Z"
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 18.5C20.5 19.0523 20.0523 19.5 19.5 19.5H4.5C3.94772 19.5 3.5 19.0523 3.5 18.5V17.5C3.5 16.9477 3.94772 16.5 4.5 16.5H19.5C20.0523 16.5 20.5 16.9477 20.5 17.5V18.5Z"
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { MenuIcon };
