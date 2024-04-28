import React from 'react';
import { Link } from 'react-router-dom';
import './NoFavorite.css';

const NoFavoritesMessage = () => {
  return (
    <div className="container">
      <h3 className="title_nofav">Create your own list of favorite dishes.</h3>
      <p className="text_nofav">
        Browse through our menu and find the ones you like 👇
      </p>
      <Link to="/Home">
        <button className="bt_nofav" type="button">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NoFavoritesMessage;
