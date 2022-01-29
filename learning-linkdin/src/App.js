import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [name, setName]=useState('Rasel')



 return ( <div>
              <h1>Hello {name}</h1>
              <button onClick={()=>setName('Zeras')}>ClickMe</button>
          </div>
 );
}

export default App;
