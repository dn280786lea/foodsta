import React from 'react';
import './ShowModal.css';
import Close from '../img/icon/Close';

const ShowModal = ({ closeModal }) => {
  const handleSubmit = event => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-help">
        <form onSubmit={handleSubmit} className="help-form">
          <button type="button" className="close-button" onClick={closeModal}>
            <Close />
          </button>
          <h2 className="order-form">Order Form</h2>
          <label className="order-label" htmlFor="name">
            Name
          </label>
          <input
            className="order-input"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <label className="order-label" htmlFor="name">
            Phone number
            <input
              className="order-input"
              type="phone"
              name="phone"
              placeholder="+38(0_ _) _ _ _   _ _   _ _"
              required
            />
          </label>
          <label className="order-label" htmlFor="name">
            E-mail
          </label>
          <input
            className="order-input"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
          <button className="order-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowModal;
