import React from 'react';
const Backet = ({ width, stroke, fill, strokeColor }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z"
        stroke="none"
        fill="#0e0e0e;"
      ></path>
    </svg>
  );
};

export default Backet;
