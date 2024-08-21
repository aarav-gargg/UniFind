import React, { useEffect, useState , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import { loginUser } from '../../api/userService';
import { userContext , currentUserContext } from '../context';

function Login() {
    const [user, setUser] = useContext(userContext);
    const [currentUser, setCurrentUser] = useContext(currentUserContext);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const resp= await loginUser(email,password);
            console.log(resp);
            if(resp.status==201){
                alert("YOU'VE BEEN LOGGED IN");
                navigate('/');
                setUser(true);
                setCurrentUser(resp.data.data);
            }
            else{
                alert("Invalid Email or Password");
            }
        } catch (error) {
            console.log(error);
        }
    }
      return (
        <div className='Login-Container'>
            <div className='Login-inner-container'>
                <h1 >Login</h1>
                <h3 >Your Dream College Awaits—Sign In to Discover. <br /> Welcome back!</h3>
                <form className='Login-Form'>
                    <div className="Login-inner-form">
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            required
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='Login-input'
                        />
                        <input
                            type="password"
                            placeholder='Enter your Password'
                            required
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='Login-input'
                        />
                        <button onClick={handleSubmit} className='Login-login-button'>
                            Login
                        </button>
                    </div>
                    <div className='my-7 text-black'>
                        Not a member yet? <Link to="/Signup" className='login-signup-link'>SignUp here</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login
