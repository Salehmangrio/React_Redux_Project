import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (
    <div className='w-full h-screen bg-green-300 flex flex-col justify-center items-center gap-16'>

        <h1 className='text-7xl font-extrabold '>Welcome to <span className='text-red-600 font-serif font-extrabold'>PlantStore</span></h1>
        <button className='text-4xl font-extrabold bg-red-500 px-8 py-2 rounded-lg hover:bg-red-700 hover:text-white'>Get Started</button>
    </div>
  )
}

export default SplashPage