import React from "react";
import {Outlet, Link} from 'react-router-dom';
import NavBar from "../components/NavBar";
import Homepage from '../HomePage';

const NavLinks = [
    {title : "Home", url : 'home'}, 
    {title: "About", url : 'about'}
  ];

export default function Root(){
    return (    
    <div className="App">
        <NavBar NavBarLinks={NavLinks}/>
        <div>
            <Outlet />
        </div>
    </div>)
}
