import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { selectProducts } from '../redux/productsSlice';


const ProductListing = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='md:p-12 w-11/12 mx-auto'>
      <h2  className='text-4xl my-12 font-extrabold text-green-600'>Our Plants</h2>
      <div className="cart-items flex flex-col md:flex-row  gap-12 md:flex-wrap ">
        {products.map((product) => (
          <div key={product.id} className='shadow-lg pb-4 rounded-md p-4' >
            <img src={product.thumbnail} alt={product.name} className='w-full md:w-96 h-80 md:h-64 rounded-lg'/>
            <h3 className='text-xl my-2 text-green-700 font-extrabold'>{product.name}</h3>
            <p className='text-2xl my-2 text-blue-600 font-extrabold'>${product.price}</p>
            <button className='bg-blue-400 py-2 rounded-lg text-white font-extrabold w-full md:w-96 hover:bg-blue-700'  onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
