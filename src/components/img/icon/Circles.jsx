import React from 'react';

const Circles = ({ children }) => (
  <svg
    width="580"
    height="580"
    viewBox="0 0 580 580"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="290"
      cy="290"
      r="277"
      fill="#FEFEFE"
      stroke="#FFE550"
      strokeWidth="26"
    />
    {children}
  </svg>
);

export default Circles;
