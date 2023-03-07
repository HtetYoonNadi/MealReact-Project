import React from 'react';
import {BiSearch} from 'react-icons/bi';
import './MealCart.css';

const MealCart = ({name, image}) => {
  return (
    <div className='relative'>
        <img className='h-[100px] object-cover rounded-lg' src={image} alt="" />        
        <p className='flex bg-gray align-middle items-center justify-center h-12 w-12 rounded-full absolute top-[45%] left-[45%]'>
           <BiSearch className='text-3xl'/>
        </p>
    </div>
  )
}

export default MealCart;