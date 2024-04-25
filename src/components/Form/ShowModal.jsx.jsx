import React, { useState } from 'react';
import './ShowModal.css';
import Close from '../img/icon/Close';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Перевірте поля форми
    if (email.trim() === '' || text.trim() === '' || phone.trim() === '') {
      toast.error('All fields are required', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return; // Не закривати  вікно, якщо є помилка
    }

    // Закрити модальне вікно та успішно відправити дані
    closeModal();
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

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const handleTextChange = evt => {
    setText(evt.target.value);
  };

  const handlePhoneChange = evt => {
    setPhone(evt.target.value);
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
            onChange={handleTextChange}
          />
          <label className="order-label" htmlFor="name">
            Phone number
            <input
              className="order-input"
              type="phone"
              name="phone"
              placeholder="+38(0_ _) _ _ _   _ _   _ _"
              onChange={handlePhoneChange}
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
            onChange={handleEmailChange}
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
