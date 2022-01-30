import './App.css';
import React, { useState, useEffect } from 'react';

function App({login}) {


  const [data, setData]=useState(null)
  const[loading, setLoading]=useState(false)
  const[error, setError]=useState(null)



  useEffect(()=>{
    fetch(`https://api.github.com/users/${ login }`)
    .then((res)=>res.json())
    .then(setData)
    .then(()=>setLoading(false))
    .catch(setError)
  },[login]);

  if(loading) return <h1>Loading...</h1>;
  if(error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>

  if(!data) return null;

  
    return (<div>
              <h1>{data.name}</h1>
              <img alt={data.login} src={data.avatar_url} />
              <h1>Hello React Testing Library</h1>
          </div>
     ) 
}

export default App;
