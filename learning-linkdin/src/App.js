import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import {Home, About, Events, Contact, Error} from './pages'

function App() {
  
    return ( 
      <div>
      <Routes>
                <Route exact path="/" element={<Home /> }/>
                <Route exact path="/about" element={<About /> }/>
                <Route exact path="/events" element={ <Events /> }/>
                <Route exact path="/contact" element={<Contact /> }/>
                <Route exact path="*" element={<Error /> }/>
      </Routes>
      </div>         
    )     
     
}

export default App;
