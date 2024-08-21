import React, { useEffect, useState, useContext } from 'react';
import { userContext, currentUserContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser, loginUser } from '../../api/userService';
import "./signup.css"

function Signup() {
    const [user, setUser] = useContext(userContext);
    const [currentUser, setCurrentUser] = useContext(currentUserContext);
    const SignUp = () => {
        const [SignupData, setSignupData] = useState({
            name: "",
            email: "",
            password: "",
            conpassword: "",
        });
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const resp = await signUpUser(SignupData);
                console.log(resp);
                if (resp.status == 201) {
                    const respo = await loginUser(SignupData.email, SignupData.password);
                    console.log(respo);
                    if (respo.status == 201) {
                        setUser(true);
                        setCurrentUser(respo.data.data);
                        navigate('/');
                    }
                    alert("User created successfully");
                }
                else {
                    alert("User already exists");
                    navigate("/login");
                }
            } catch (error) {
                console.log(error);
            }
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setSignupData({
                ...SignupData,
                [name.toLowerCase()]: value,
            });
        };

        const [passwordMatch, setpasswordMatch] = useState(true);

        useEffect(() => {
            setpasswordMatch(SignupData.password === SignupData.conpassword || SignupData.conpassword === "")
        }, [SignupData]);

        return (
            <div className='signup-container'>
                <div className='signup-left'>
                    <h1 className='signup-heading'>Discover Your Dream College: Sign Up to Unlock Your Future with UniFind!</h1>
                </div>
                <div className='signup-right'>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="signup-form-inner">
                            <input
                                required
                                type="text"
                                placeholder='Enter your Name'
                                name='name'
                                value={SignupData.name}
                                onChange={handleChange}
                                className='signup-input'
                            />
                            <input
                                required
                                type="email"
                                placeholder='Enter your Email Address'
                                name='email'
                                value={SignupData.email}
                                onChange={handleChange}
                                className='signup-input'
                            />
                            <input
                                required
                                type="password"
                                placeholder='Enter your Password'
                                name='password'
                                value={SignupData.password}
                                onChange={handleChange}
                                className='signup-input'
                            />
                            <input
                                required
                                type="password"
                                placeholder='Confirm your Password'
                                name='conpassword'
                                value={SignupData.conpassword}
                                onChange={handleChange}
                                className='signup-input'
                            />
                            {!passwordMatch &&
                                <p className='signup-error'>
                                    Your Passwords do not match
                                </p>
                            }
                            <button onClick={handleSubmit} disabled={!passwordMatch || SignupData.name==="" || SignupData.email==="" || SignupData.password==="" || SignupData.conpassword===""}
                                className='signup-button'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className='signup-already'>
                        Already have an account? <Link to="/Login" className='signup-link'><span className="signup-login">Log in here</span></Link>
                    </div>
                </div>
            </div>
        );
    }

    return <SignUp />;
}

export default Signup;
