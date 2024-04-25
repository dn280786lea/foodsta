import React, { useState } from 'react';
import './Subscribe.css';
import banan from '../img/banan.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email.trim() === '') {
      toast.error('Field is required', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      return;
    }

    // Логіка після успішного відправлення форми
    toast.success('Form submitted successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: 'colored',
    });
  };

  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-content">
        <h2 className="subscribe-title">Subscribe To Get Special Offers</h2>
        <p className="subscribe-sub">
          Order now and receive 10% off your first meal with Enjoy Your Favorite
          Food From Anywhere.
        </p>
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            className="subscribe-input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="subscribe-submit" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className="banan">
        <img src={banan} alt="banan" />
      </div>
    </div>
  );
};

export default Subscribe;
