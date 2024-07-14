// import { useState } from 'react';
import './App.css';
// import Navbar from './Components/navbar/Navbar';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import FormPage from './Components/InputForm/FormPage';
import Layout from './Layout';
// import Login from './Components/Login';
import Contact from './Components/contact/Contact';
import Home from './Components/home/Home';
import Articles from './Components/articles/Articles';
import College from './Components/collegePreview/College';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='Home' element={<Home/>} />
      <Route path='CollegePredictor' element={<FormPage />} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='Articles' element={<Articles/>}/>
      {/* <Route path='Login' element={<Login />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
       <College/>
    </>
  );
}

export default App;

