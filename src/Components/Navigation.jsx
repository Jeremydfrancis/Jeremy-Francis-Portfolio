import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"

const Navigation = () => {
  return (
    <>
                <li>
                    <NavLink to="/" 
                    className={(navData)=> navData.isActive ? " underline decoration-4 underline-offset-8 uppercase" 
                    :" hover:underline hover:underline-offset-8 hover:uppercase decoration-4" }
                    >Home</NavLink>
                </li>
                
                
                <li>
                    <NavLink to="/About" 
                    className={(navData)=> navData.isActive ? " underline decoration-4 underline-offset-8 uppercase" 
                    :" hover:underline hover:underline-offset-8 hover:uppercase decoration-4" }
                    >About</NavLink>
                </li>

                <li>
                <NavLink to="/Contact" 
                    className={(navData)=> navData.isActive ? " underline decoration-4 underline-offset-8 uppercase" 
                    :"hover:underline hover:underline-offset-8 hover:uppercase decoration-4" }
                    >Contact</NavLink>
                </li>
            
    </>
  )
}

export default Navigation