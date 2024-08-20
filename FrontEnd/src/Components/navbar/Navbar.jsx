import "./navbar.css"
import { logoutCurrentUser } from "../../api/userService";
import { NavLink, Link } from 'react-router-dom';
import { useContext , useState , useEffect} from "react";
import { currentUserContext, userContext } from "../context";
import { Avatar } from "@mui/material";
import {Menu , MenuItem} from "@mui/material";

function Navbar() {
  const [user, setUser] = useContext(userContext);
  const [currentUser, setCurrentUser] = useContext(currentUserContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
   
    console.log('User or user details changed', user, currentUser);
  }, [user, currentUser]); 

  async function logout() {
    try {
    await logoutCurrentUser();
    setCurrentUser(null);
    setUser(false);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <header>
        <nav className="navigation ">
          <Link to="/Home" className="right">
            <img src="/Articlebg.jpg" alt="" />
            UniFind
          </Link>
          <div className="left">
            <ul>
              <li><NavLink activeclassname="active" to="/Colleges">Colleges</NavLink></li>
              <li><NavLink activeclassname="active" to="/CollegePredictor">College Predictor</NavLink></li>
              <li><NavLink activeclassname="active" to="/OurTeam">Our Team</NavLink></li>
            </ul>
          </div>

          <div className="ultraLeft">
            {!user && (
              <button>
                <NavLink to="/Login">Login/SignUp</NavLink>
              </button>
            )}
            {user && (
              <>
                <Avatar onClick={(e) => setOpen(true)} src="/userProfile.avif" />
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  open={open}
                  onClose={(e) => setOpen(false)}
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
    </>
  );
}

export default Navbar;

