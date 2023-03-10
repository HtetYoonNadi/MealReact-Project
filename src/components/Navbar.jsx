import React from 'react';
import {MdFoodBank} from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center p-7 rounded-lg shadow'>
      <h1 className='font-Climate mt-2'>For Meal</h1>
      <Link>
        <MdFoodBank className='text-6xl items-center hover:text-gray-800'/>
      </Link>
        
        <div>
            <input type="text" className='border-2 border-slate-700 p-2 ml-[400px] rounded-md w-80' placeholder='Search Menu'/>
        </div>
    </div>
  )
}

export default Navbar;