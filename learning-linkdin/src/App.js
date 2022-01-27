import './App.css';
import React from 'react';
import biff from './biff.jpg'

export function Header(props){
  console.log(props)
  return (
    <header>
       <h1>{ props.name }</h1>
    </header>
   
  )
}

export function Main(props){
  return (
    <section>
      <p>Here is our all menu</p>
      <img src={ biff } alt="biff-images" height={200}/>
      <ul style={{textAlign: 'left'}}>
        {props.menu.map((menu)=><li  key={menu.id} >{ menu.title }</li>)}
      </ul>
    </section>
  )
}

export function Footer(props){
  return (
    <section>
      <p> Copyright {props.year}</p>
    </section>
  )
}


const menu=[
  'Burger',
  'Biff',
  'Pasta'
];


const menuAsObj=menu.map((menu, i)=>({id:i, title: menu}))



function App() {
  return (
    <div className="App">
      <Header name="Deli Bar&Kök "/>
      <Main menu={menuAsObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
