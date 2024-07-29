// import React from 'react'
// import { useState , useEffect } from 'react';
import Carousel from "./Carousel"
import "./Home.css"
// import "./script"
// import Navbar from '../navbar/Navbar';

const Home = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => setScrollPosition(window.scrollY);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className="page parallax-1-page">
        <section className='parallax-banner '>
          <h2>Unifind</h2>
          <button>Predict your College</button>
        </section>
        <section className="parallax-container">
          <h1>Welcome To UniFind</h1>
          <p>
            At UniFind, we understand that the journey to securing a spot in a top college can be overwhelming and filled with uncertainty. Our mission is to transform this journey into a smoother, more predictable experience by providing cutting-edge tools and comprehensive resources for students aiming to excel in the JEE Main and JEE Advanced exams.
            <br />
            <br />
            Navigating the college admission process can be daunting, especially when faced with fierce competition and the pressure to perform well in entrance exams. UniFind is here to alleviate these challenges by offering a robust platform designed to guide you every step of the way. We combine the power of advanced technology with a deep understanding of the educational landscape in India to bring you the most effective solutions for your college admission needs.
          </p>
          <h2>Who We Are</h2>
          <p>
            At UniFind, we are dedicated to providing a seamless and user-friendly experience for students aiming to predict their college admissions based on their JEE Main or JEE Advanced ranks. Our innovative AI-driven predictor tool leverages cutting-edge technology to offer accurate and personalized predictions.
          </p>
          <h2>What We Offer</h2>
          <p>
            <b>AI-Powered Predictions:</b> Our advanced algorithms analyze your JEE ranks to predict the colleges where you have the best chances of admission.
            <b> Comprehensive Database:</b> Access detailed information on colleges across India, including their admission criteria, cut-off ranks, and more.
            <b> User-Friendly Interface:</b> Navigate through our platform with ease, thanks to our intuitive design and smooth functionality.
          </p>
          <h2>Our Mission</h2>
          <p>
            We believe that every student deserves the opportunity to pursue their dreams without the stress and uncertainty of the admission process. Our goal is to simplify this journey and provide you with the clarity you need to make the best choices for your future.

            Join us at UniFind, and let's make your college dreams a reality!
          </p>
        </section>
        <Carousel />

      </div>
    </>
  )
}

export default Home
