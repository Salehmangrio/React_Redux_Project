import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/splash' element={<SplashPage/>}></Route>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
