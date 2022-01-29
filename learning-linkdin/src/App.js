import './App.css';
import React, { useState, useEffect } from 'react';

function App(props) {
  const [name, setName]=useState('Rasel')


  useEffect(()=>{
      console.log(`It's ${name} !`)
  }, [name]);
  
  useEffect(()=>{

  },[])

 return ( <div>
              <h1>Hello {name}</h1>
              <button onClick={()=>setName('Zeras')}>ClickMe</button>
          </div>
 );
}

export default App;
