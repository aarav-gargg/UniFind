// import * as React from 'react';
import "./navbar.css"
import { NavLink , Link } from 'react-router-dom';
// import { Paper } from '@mui/material';
// import { Style } from '@mui/icons-material';



function Navbar() {
  return (
    <>
    <header>
        <nav className="navigation ">
        <Link to="/Home" className="right">  <img src="/Articlebg.jpg" alt="" />UniFind </Link>
            <div className="left">
            <ul>
                    <li><NavLink activeclassname="active" to="/Colleges">Colleges</NavLink></li>
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
