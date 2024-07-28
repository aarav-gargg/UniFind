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
import Articles from './Components/articles/Articles';
import College from './Components/collegePreview/College';
import { useEffect } from 'react';
import CollegeDisplay from './Components/InputForm/CollegeDisplay';
import Team from './Components/Team/Team';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='Home' element={<Home />} />
      <Route path='CollegePredictor' element={<FormPage />} />
      <Route path='Articles' element={<Articles />} />
      <Route path='OurTeam' element={<Team/>} />
      <Route path ='college' element={<College />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <RouterProvider router={router} />
      {/* <CollegeDisplay/> */}
      {/* <College/> */}
      {/* <Team></Team> */}
    </>
  );
}

export default App;

