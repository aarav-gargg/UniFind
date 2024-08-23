// import { useState } from 'react';
import './App.css';
// import Navbar from './Components/navbar/Navbar';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import FormPage from './Components/InputForm/FormPage';
import Layout from './Layout';
// import Login from './Components/Login';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Components/home/Home';
import Articles from './Components/colleges/Colleges';
import College from './Components/collegePreview/College';
import { useEffect, useState } from 'react';
import CollegeDisplay from './Components/InputForm/CollegeDisplay';
import Team from './Components/Team/Team';
import Login from './Components/login/Login';
import AllotedColleges from './Components/InputForm/AllotedColleges';
import Signup from './Components/signup/Signup';
import { checkUserStatus } from './api/userService';
import { useContext } from 'react';
import { userContext , currentUserContext,reviewContext} from './Components/context';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='Home' element={<Home />} />
      <Route path='CollegePredictor' element={<FormPage />} />
      <Route path='Colleges' element={<Articles />} />
      <Route path='OurTeam' element={<Team/>} />
      {/* <Route path ='college' element={<College />} /> */}
      <Route path='AllotedColleges' element={<AllotedColleges/>}/>
      <Route path='College/:collegeId' element={<College/>} />
      <Route path='Login' element={<Login/>} />
      <Route path='Signup' element={<Signup/>} />
    </Route>
  )
);

function App() {
  const [user,setUser]=useState(false);
  const [currentUser,setCurrentUser]=useState(null);
  const [newReview,setNewReview]=useState(false);
  useEffect(()=>{
    const fetchUser=async()=>{
     try {
       const response=await checkUserStatus();
       console.log(response);
       if(response.statusCode==200){
        setUser(true);
        setCurrentUser(response.data);
       }
     } catch (error) {
      console.log(error)
     }
    }
    fetchUser()
},[])
// useEffect(()=>{
//   console.log(user , currentUser)
// },[user,currentUser])
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <currentUserContext.Provider value={[currentUser , setCurrentUser]}>
     <userContext.Provider value={[user , setUser]}>
      <reviewContext.Provider value={[newReview,setNewReview]}>
      <RouterProvider router={router} />
      </reviewContext.Provider> 
     </userContext.Provider>
     </currentUserContext.Provider>
    </>
  );
}

export default App;

