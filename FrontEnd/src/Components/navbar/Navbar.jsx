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
                    <li><NavLink activeclassname="active" to="/Home">Home</NavLink></li>
                    <li><NavLink activeclassname="active" to="/Articles">Articles</NavLink></li>
                    <li><NavLink activeclassname="active" to="/CollegePredictor">College Predictor</NavLink></li>
                    <li><NavLink activeclassname="active" to="/OurTeam">Our Team</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  );
}

export default Navbar;
