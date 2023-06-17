import React from 'react';
import Index from './pages/Index';
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product' element={<Product />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
