import React from 'react';
import Index from './pages/Index';
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      
    </div>
  );
}

export default App;
