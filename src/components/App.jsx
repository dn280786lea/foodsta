import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../Page/HomePage/HomePage'));
const Favorite = lazy(() => import('../Page/Favorite/Favorite'));

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
