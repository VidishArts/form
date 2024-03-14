import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employ from './Employ';
import Head from './Head';
import Employlist from './Employlist';
import Update from './Update';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path='employ'  element={<Employ/>}/>
          <Route path='employlist'  element={<Employlist/>}/>
          <Route path='update/:id' element ={<Update/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
