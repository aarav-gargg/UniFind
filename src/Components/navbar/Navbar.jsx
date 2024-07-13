import * as React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';



function Navbar() {
  return (
    <>
    <header>
        <nav className="navigation ">
            <div className="right">Unifind
            </div>
            <div className="left">
            <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Articles">Articles</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  );
}

export default Navbar;
