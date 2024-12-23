import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cartSlice';

const Header = () => {
  const cartItems = useSelector(selectCart);

  return (
    <header className='flex justify-between items-center p-4 md:p-8 shadow-md md:bg-yellow-200 bg-teal-400'>
      <h1 className='text-3xl md:text-7xl text-rose-800 font-serif font-bold'>PlantStore</h1>
      <nav className='flex gap-12'>
        <Link className='md:text-2xl text-lg text-red-600 font-mono font-semibold' to="/">Home</Link>
        <Link className='md:text-2xl text-lg text-red-600 font-mono font-semibold' to="/cart">
          Cart<sup >({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</sup>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
