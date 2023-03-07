import React from 'react';
import {MdFoodBank} from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='flex justify-around p-7 rounded-lg shadow'>
        <MdFoodBank className='text-5xl'/>
        <div>
            <input type="text" className='bg-black' />
        </div>
    </div>
  )
}

export default Navbar