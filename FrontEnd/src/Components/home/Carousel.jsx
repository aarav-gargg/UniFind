import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IconButton } from '@mui/material';

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Recalculate card width and total cards on mount
    const cards = cardsRef.current;
    const cardWidth = cards.querySelector('.card1').offsetWidth;
    const totalCards = cards.querySelectorAll('.card1').length;
    cards.style.width = `${cardWidth * totalCards}px`;
  }, []);

  const slideLeft = () => {
    if (position > 0) {
      setPosition((prevPosition) => prevPosition - 1);
    }
  };

  const slideRight = () => {
    if (position < cardsRef.current.querySelectorAll('.card1').length - 1) {
      setPosition((prevPosition) => prevPosition + 1);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    const cardWidth = cards.querySelector('.card1').offsetWidth;
    cards.style.transform = `translateX(${-position * cardWidth}px)`;
  }, [position]);

  return (
    <div className="container2">
      <IconButton style={{height:"200px"}} onClick={slideLeft}><KeyboardDoubleArrowLeftIcon/></IconButton>
      <div className="card-wrapper">
        <div className="cards" ref={cardsRef}>
        <div className="card1" data-aos="flip-left" data-aos-duration="1000">
           <h4> UPTAC Counselling 2024 choice filling process postponed till ..</h4>
            <br />
           <p> Read more at:</p>
            <a style={{color:"black"}} href="http://timesofindia.indiatimes.com/articleshow/112152683.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Times of India</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
           <h4> JoSAA Counselling Final seat allotment results announced ..</h4>
            <br />
            Read more at:
            <a style={{color:"black"}} href="https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms">Times of India</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
           <h4>Life in an IIT | Born to engineers, IIT-Kanpur BTech ..</h4>
            <br />
            Read more at:
            <a style={{color:"black"}} href="https://indianexpress.com/article/education/life-in-an-iit-kanpur-btech-student-electrical-engineering-branch-from-hyderabad-engineer-parents-jee-main-advanced-9466139/">Times of India</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
           <h4> JoSAA Counselling Final seat allotment results announced ..</h4>
            <br />
            Read more at:
            <a style={{color:"black"}} href="https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms">Times of India</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">5</div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">6</div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">7</div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">8</div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">9</div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">10</div>
        </div>
      </div>
      <IconButton style={{height:"200px"}} onClick={slideRight}><KeyboardDoubleArrowRightIcon/></IconButton>
    </div>
  );
};

export default Carousel;
