import React from 'react'
import { Route, Routes } from 'react-router';
import Meal from './components/meal';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Meal/>} />
        
      </Routes>
    </div>
  )
}

export default App;