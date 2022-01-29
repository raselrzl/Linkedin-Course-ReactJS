import './App.css';
import React from 'react';


export function SecretComponent(){
  return <h1>Secret Component</h1>
}

export function GeneralComponent(){
  return <h1>General Component</h1>
}

function App(props) {
 return ( <div>
    {props.authorized ? <SecretComponent /> : <GeneralComponent />}

  </div>
 );
}

export default App;
