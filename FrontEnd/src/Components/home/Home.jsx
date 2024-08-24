// import React from 'react'
// import { useState , useEffect } from 'react';
import Carousel from "./Carousel"
import "./Home.css"
import { Link } from 'react-router-dom';
// import "./script"
import { useContext, useEffect } from "react";
import { currentUserContext } from "../context";
import {userContext} from "../context"
import { logoutCurrentUser } from "../../api/userService";
// import Navbar from '../navbar/Navbar';

const Home = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => setScrollPosition(window.scrollY);
  // const user = useContext(userContext);


  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  return (
    <>
     <div className="page parallax-1-page">
        <div className='parallax-banner'>
          <div className="contentHome">
          <h2>Unifind</h2>
          <button className="homeBtn"><Link to="/CollegePredictor">Predict your College</Link></button>
          </div>
        </div>
        <section className="parallax-container">
        <h1>Welcome To UniFind</h1>
<p>
    Embarking on the journey to secure admission to a top-tier college is one of the most significant milestones in a student's academic life. At UniFind, we understand the magnitude of this challenge and are dedicated to turning this journey into a more manageable and predictable experience. Our platform is designed to empower you with the tools needed to simplify the complexities of the college admission process.
    <br /><br />
    The road to college can often seem overwhelming, filled with uncertainties and intense competition. The pressure to perform in entrance exams can add to the stress, making it difficult to focus on what truly matters—your preparation and confidence. UniFind is here to lift that burden by providing a robust platform tailored to guide you through every phase of the admission process. With our comprehensive resources and insights, you can approach your college search with clarity and purpose, knowing that you have the support you need to make informed decisions about your future.
</p>
<br /> <br />
<h2><b>Who We Are</b></h2>
<p>
    UniFind is  a college predictor. Our platform is specifically designed to serve the needs of students who aspire to predict their college admissions based on their performance in JEE Main and JEE Advanced exams. We are committed to offering a seamless, user-friendly experience that delivers accurate and personalized insights. By leveraging our deep understanding of the Indian education system, we provide you with the information and tools necessary to make strategic decisions about your college applications.
    <br />
    At UniFind, we believe that every student deserves the opportunity to pursue their academic dreams without the added stress of navigating a complex and competitive admission landscape. Our mission is to simplify this journey, providing you with the clarity and confidence you need to succeed.
</p>
<br /> <br />
<h2><b>What We Offer</b></h2>
<p>
    <b>Predictive Insights:</b> UniFind offers powerful predictive tools that allow you to analyze your JEE Main and JEE Advanced ranks. Our algorithms estimate your chances of admission to various colleges, helping you focus your efforts on institutions where you are most likely to succeed. With our insights, you can approach the application process strategically, enhancing your chances of getting into your desired college.
    <br /><br />
    <b>Comprehensive College Database:</b> Our platform provides access to a vast and detailed database of colleges across India. From admission criteria and cut-off ranks to faculty information and campus facilities, you can find everything you need to make an informed choice. Whether you're looking for a specific course, a particular location, or a college with a strong placement record, UniFind's database has you covered.
    <br /><br />
    <b>User-Friendly Interface:</b> We understand that navigating through large amounts of information can be daunting. That's why we've designed UniFind with a user-friendly interface that ensures you can access the information you need quickly and easily. Our platform is intuitive, with smooth functionality that makes your experience seamless from start to finish.
    <br /><br />
</p>

<h2><b>Our Mission</b></h2>
<p>
    At UniFind, our mission is to demystify the college admission process and provide students with the tools they need to succeed. We believe that every student should have access to clear, accurate, and personalized information that empowers them to make the best choices for their future. Our goal is to eliminate the uncertainties of the admission process, allowing you to focus on your preparation and confidently pursue your academic aspirations.
    <br /><br />
    Join us at UniFind, and let's make your college dreams a reality! Together, we can navigate the complexities of the admission process, ensuring that you have the best possible chance of success. With UniFind by your side, the future you've always envisioned is within reach.
</p>

        </section>
        <div className="news">
        <h1>LATEST NEWS</h1>
        <Carousel />
        </div>

      </div>
    
        </>
  )
}

export default Home
