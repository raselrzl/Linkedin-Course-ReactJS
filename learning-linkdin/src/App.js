import './App.css';
import React, { useReducer, useState, useEffect } from 'react';

function App() {
  const [checked, toggle]=useReducer(
    (checked)=>!checked,
    false
  )

 return (
          <div>
              <input 
                type="checkbox"
                value={checked}
                onChange={toggle}
              />
              <p>{checked? "checked":'not Checked'}</p>
          </div>
 )
}

export default App;
