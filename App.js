import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Todoform from './Components/Todoform';

function App(){
  return(
    <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Todoform' element={<Todoform />} />
        </Routes>
    </div>
  );
}

export default App;
