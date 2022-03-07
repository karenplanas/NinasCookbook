import React from 'react'

const ChefHat : React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 19.5H18"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.5V19.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.5V19.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15.5V19.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3.00003C17.4345 3.00387 16.8786 3.14636 16.381 3.41503C15.6413 1.64957 13.9142 0.50061 12 0.50061C10.0858 0.50061 8.3587 1.64957 7.619 3.41503C7.1214 3.14636 6.56549 3.00387 6 3.00003C4.067 3.00003 2.5 4.56704 2.5 6.50003C2.5 8.43303 4.067 10 6 10V23.5H18V10C19.933 10 21.5 8.43303 21.5 6.50003C21.5 4.56704 19.933 3.00003 18 3.00003Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ChefHat };