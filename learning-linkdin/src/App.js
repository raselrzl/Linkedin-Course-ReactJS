import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import {Home, About, Events, Contact, Error, Services, History} from './pages'

function App() {
  
    return ( 
      <div>
      <Routes>
                <Route exact path="/" element={<Home /> }/>
                   <Route exact path="/about" element={<About /> }>
                      
                   <Route path="services" element={<Services />}/>
                   <Route path="history" element={<History />}/>

                   </Route> 
                <Route exact path="/events" element={ <Events /> }/>
                <Route exact path="/contact" element={<Contact /> }/>
                <Route exact path="*" element={<Error /> }/>
      </Routes>
      </div>         
    )     
     
}

export default App;
