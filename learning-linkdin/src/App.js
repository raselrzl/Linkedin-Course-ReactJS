import './App.css';
import React, { useReducer, useState, useEffect } from 'react';

function App({login}) {
  const [data, setData]=useState(null)


  useEffect(()=>{
    fetch(`https://api.github.com/users/${ login }`)
    .then((res)=>res.json())
    .then(setData)
  },[]);

  if(data){
    return <div>{JSON.stringify(data)}</div>
  }

        else return (
          <div>
              noUser available
          </div>
 )
}

export default App;
