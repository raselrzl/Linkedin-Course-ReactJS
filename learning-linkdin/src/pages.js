import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom'
export function Home(){
    return(
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='events'>Events</Link>
                <Link to='/'>Home</Link>
            </nav>
        </div>
        
    )
}

export function About(){
    return(
        <div>
            <h1>[About page]</h1>
            <Outlet />
        </div>
    )
}

export function Services(){
    return(
        <div>
            <h1>[Service page]</h1>
        </div>
    )
}
export function History(){
    return(
        <div>
            <h1>[History page]</h1>
        </div>
    )
}


export function Events(){
    return(
        <div>
            <h1>[events]</h1>
        </div>
    )
}
export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

export function Error(){
    let location=useLocation()
    console.log(location)
    return(
        <div>
            <h1>[404 error {location.pathname}]</h1>
        </div>
    )
}