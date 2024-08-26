// import "./navbar.css";
// import { logoutCurrentUser } from "../../api/userService";
// import { NavLink, Link } from 'react-router-dom';
// import { useContext, useState, useEffect } from "react";
// import { currentUserContext, userContext } from "../context";
// import { Avatar } from "@mui/material";
// import { Menu, MenuItem } from "@mui/material";
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

// function Navbar() {
//   const [user, setUser] = useContext(userContext);
//   const [currentUser, setCurrentUser] = useContext(currentUserContext);
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     console.log('User or user details changed', user, currentUser);
//   }, [user, currentUser]);

//   async function logout() {
//     try {
//       await logoutCurrentUser();
//       setCurrentUser(null);
//       setUser(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <header>
//         <nav className="navigation">
//     <div className="logo-container">
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//         <Link to="/Home" className="logo-link">
//             <img src="/Articlebg.jpg" alt="UniFind Logo" />
//             UniFind
//         </Link>
//     </div>

//     <div className={`left ${menuOpen ? 'open' : ''}`}>
//         <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <li><NavLink activeclassname="active" to="/Colleges">Colleges</NavLink></li>
//             <li><NavLink activeclassname="active" to="/CollegePredictor">College Predictor</NavLink></li>
//             <li><NavLink activeclassname="active" to="/OurTeam">Our Team</NavLink></li>
//         </ul>
//     </div>

//     <div className="ultraLeft">
//         {!user && (
//             <button className="login-signup-button">
//                 <NavLink to="/Login">Login/SignUp</NavLink>
//             </button>
//         )}
//         {user && (
//             <>
//                 <Avatar onClick={() => setOpen(true)} src="/userProfile.avif" />
//                 <Menu
//                     id="demo-positioned-menu"
//                     aria-labelledby="demo-positioned-button"
//                     open={open}
//                     onClose={() => setOpen(false)}
//                     anchorOrigin={{
//                         vertical: 80,
//                         horizontal: 'right',
//                     }}
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'left',
//                     }}
//                     getContentAnchorEl={null}
//                 >
//                     <MenuItem>{currentUser?.name}</MenuItem>
//                     <MenuItem>{currentUser?.email}</MenuItem>
//                     <MenuItem onClick={logout}>Logout</MenuItem>
//                 </Menu>
//             </>
//         )}
//     </div>
// </nav>
//       </header>
//     </>
//   );
// }

// export default Navbar;
import "./navbar.css";
import { logoutCurrentUser } from "../../api/userService";
import { NavLink, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { currentUserContext, userContext } from "../context";
import { Avatar } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [user, setUser] = useContext(userContext);
  const [currentUser, setCurrentUser] = useContext(currentUserContext);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log('User or user details changed', user, currentUser);
  }, [user, currentUser]);

  async function logout() {
    try {
      await logoutCurrentUser();
      setCurrentUser(null);
      setUser(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="nav-header">
      <nav className="navigation">
        <div className="ultraLeft">
          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo and UniFind */}
          <div className={`logo-container ${menuOpen ? 'open' : ''}`}>
            <Link to="/Home" className="logo-link">
              <img src="/Articlebg.jpg" alt="UniFind Logo" />
              UniFind
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''} ui-container`}>
          <li><NavLink activeclassname="active" to="/Colleges" className="ui">Colleges</NavLink></li>
          <li><NavLink activeclassname="active" to="/CollegePredictor" className="ui">College Predictor</NavLink></li>
          <li><NavLink activeclassname="active" to="/OurTeam" className="ui">Our Team</NavLink></li>
        </ul>

        {/* Login/SignUp Button */}
        <div className="ultraLeft">
          {!user && (
            <button className="login-signup-button">
              <NavLink to="/Login">Login/SignUp</NavLink>
            </button>
          )}
          {user && (
            <>
              <Avatar onClick={() => setOpen(true)} src="/userProfile.avif" className="navbar-profile"/>
              <Menu
              className="nav-menu"
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                  vertical: 80,
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                getContentAnchorEl={null}
              >
                <MenuItem>{currentUser?.name}</MenuItem>
                <MenuItem>{currentUser?.email}</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

