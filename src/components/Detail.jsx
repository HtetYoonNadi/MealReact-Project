import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BsYoutube } from 'react-icons/bs';

const Detail = () => {
    const {id} = useParams();
    const [meals, setMeals] = useState();

    useEffect(() => {
        fetchMeal()
    }, [])

    const fetchMeal = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals}= await api.json()
        setMeals(meals[0])
        console.log(meals[0])
    }
  return (
    <div className='flex mx-auto w-[80%] gap-12 items-center h-screen'>
       <img className='h-[500px] rounded object-cover' src={meals.strMealThumb} alt="" />
       <div className=''>
          <h2 className='text-3xl font-semibold text-gray-900 tracking-wide mb-5'>{meals.strMeal}</h2>
          <h2 className='text-2xl font-semibold text-gray-600 tracking-normal'>{meals.strArea}</h2>
          <h2 className='text-base font-semibold text-gray-400 tracking-normal'>{meals.strCategory}</h2>
          <p className='text-gray-600 tracking-wide leading-8'>{meals.strInstructions}</p>
          <a href={meals.strYoutube} >
            <BsYoutube className='text-red-500 text-5xl mt-2'/>
          </a>
       </div>
    </div>
  )
}

export default Detail;