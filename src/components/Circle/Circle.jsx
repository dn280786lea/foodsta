import React from 'react';
import Circles from '../img/icon/Circles';
import './Circle.css';

const Circle = ({ children }) => {
  return (
    <div className="circle-container">
      <div className="circle-background">
        <Circles />
      </div>
      <div className="circle-content">{children}</div>
    </div>
  );
};

export default Circle;
