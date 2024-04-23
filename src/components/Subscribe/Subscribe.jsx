import React from 'react';
import './Subscribe.css';
import banan from '../img/banan.png';

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-content">
        <h2 className="subscribe-title">Subscribe To Get Special Offers</h2>
        <p className="subscribe-sub">
          Order now and receive 10% off your first meal with Enjoy Your Favorite
          Food From Anywhere.
        </p>
        <div className="subscribe-form">
          <input
            className="subscribe-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <button className="subscribe-submit" type="submit">
            Subscribe
          </button>
        </div>
      </div>
      <div className="banan">
        <img src={banan} alt="banan" />
      </div>
    </div>
  );
};

export default Subscribe;
