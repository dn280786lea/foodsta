import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import {} from './Layout.css';
import Logo from 'components/img/icon/Logo';
import Backet from 'components/img/icon/Basket';

const Layout = () => {
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
          <button className="nav-menu">
            <Backet className="nav-backet" />
          </button>
        </div>
      </nav>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
