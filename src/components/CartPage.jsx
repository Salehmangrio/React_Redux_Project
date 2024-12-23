import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { selectCart, selectCartTotal } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector(selectCart);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className='p-12 w-11/12 mx-auto'>
      <h2 className='text-4xl my-12 font-extrabold text-green-600'>Your Cart</h2>
      <div className="cart-items flex flex-col md:flex-row  gap-12 md:flex-wrap">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item shadow-lg rounded-md flex flex-col gap-8 p-4">
            <img src={item.thumbnail} alt={item.name} className='w-96 h-64 rounded-lg' />
            <h3 className='text-2xl font-extrabold text-rose-600'>{item.name}</h3>
            <p className='text-xl font-semibold text-blue-700'>${item.price} x <span className='text-red-600 font-extrabold'>{item.quantity}</span> Items</p>
            <div className='flex justify-between gap-4'>
            <button className='py-2 rounded-full text-xl font-extrabold text-red-500 w-1/2 bg-green-300 hover:bg-green-500 ' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button className='py-2 rounded-full text-xl font-extrabold text-red-500 w-1/2 bg-green-300 hover:bg-green-500 ' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            </div>
            <button className='bg-red-400  py-2 rounded-lg text-white font-extrabold w-full md:w-96 hover:bg-red-700' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cart-summary my-16">
        <p className='py-4 px-4 text-4xl'>Total:<span className='font-extrabold text-red-500'>${total}</span> </p>
        <div className='flex flex-col gap-8 my-12'>
        <button className=' bg-yellow-200 w-96 h-10 rounded-lg'>Checkout </button>
        <button className=' bg-yellow-200 w-96 h-10 rounded-lg'>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
