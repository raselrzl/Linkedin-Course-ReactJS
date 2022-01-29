import './App.css';
import React, { useReducer } from 'react';

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
          </div>
 )
}

export default App;
