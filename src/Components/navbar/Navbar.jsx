// import * as React from 'react';
import "./navbar.css"
import { NavLink } from 'react-router-dom';
// import { Paper } from '@mui/material';
// import { Style } from '@mui/icons-material';



function Navbar() {
  return (
    <>
    <header>
        <nav className="navigation ">
            <div className="right">Unifind
            </div>
            <div className="left">
            <ul>
                    <li><NavLink activeClassName="active" to="/Home">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Articles">Articles</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  );
}

export default Navbar;
