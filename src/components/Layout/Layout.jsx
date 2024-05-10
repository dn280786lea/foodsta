import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.css';
import Logo from 'components/img/icon/Logo';
import Basket from 'components/img/icon/Basket';
import AddBasket from '../AddBacket/AddBacket';

const Layout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openBasketModal = () => {
    setIsModalVisible(true);
  };

  const closeBasketModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <nav>
        <div className="logo-name">
          <Logo />
        </div>
        <div className="logo-container">
          <NavLink className="nav-menu" to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink className="nav-menu" to="/">
            About
          </NavLink>
          <NavLink className="nav-menu" to="/">
            Service
          </NavLink>
          <NavLink className="nav-menu" to="/">
            Menu
          </NavLink>
          <NavLink className="nav-menu" to="/">
            Contact
          </NavLink>
          <NavLink className="nav-menu" to="/favorites">
            Favorite
          </NavLink>
          <button className="nav-menu" onClick={openBasketModal}>
            <Basket className="nav-basket" />
          </button>
        </div>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {isModalVisible && <AddBasket closeModal={closeBasketModal} />}
    </>
  );
};

export default Layout;
