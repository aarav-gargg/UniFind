import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IconButton } from '@mui/material';

const Carousel = () => {
  const [position, setPosition] = useState(1); // Start at the first cloned card
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const cardWidth = cards.querySelector('.card1').offsetWidth;
    const totalCards = cards.querySelectorAll('.card1').length;

    // Set the width of the cards container
    cards.style.width = `${cardWidth * totalCards}px`;

    // Clone first and last cards for infinite loop effect
    const firstCard = cards.querySelector('.card1');
    const lastCard = cards.querySelector('.card1:last-child');
    const firstCardClone = firstCard.cloneNode(true);
    const lastCardClone = lastCard.cloneNode(true);
    
    cards.appendChild(firstCardClone);
    cards.insertBefore(lastCardClone, firstCard);
    
    // Set the initial position to the first actual card
    cards.style.transform = `translateX(-${cardWidth}px)`;
  }, []);

  const slideLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setPosition((prevPosition) => prevPosition - 1);
  };

  const slideRight = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setPosition((prevPosition) => prevPosition + 1);
  };

  useEffect(() => {
    const cards = cardsRef.current;
    const cardWidth = cards.querySelector('.card1').offsetWidth;
    cards.style.transition = 'transform 0.5s ease-in-out';
    cards.style.transform = `translateX(-${position * cardWidth}px)`;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (position === 0) {
        cards.style.transition = 'none';
        setPosition(cards.querySelectorAll('.card1').length - 2); // Skip to the second last card (last actual card)
        cards.style.transform = `translateX(-${(cards.querySelectorAll('.card1').length - 2) * cardWidth}px)`;
      } else if (position === cards.querySelectorAll('.card1').length - 1) {
        cards.style.transition = 'none';
        setPosition(1); // Skip to the second card (first actual card)
        cards.style.transform = `translateX(-${cardWidth}px)`;
      }
    };

    cards.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      cards.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [position]);

  return (
    <div className="container2">
      <IconButton style={{height:"200px"}} onClick={slideLeft}><KeyboardDoubleArrowLeftIcon/></IconButton>
      <div className="card-wrapper">
        <div className="cards" ref={cardsRef}>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>UPTAC Counselling 2024 choice filling process postponed till ..</h4>
            <br />
            <a style={{color:"black"}} href="http://timesofindia.indiatimes.com/articleshow/112152683.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JoSAA Counselling Final seat allotment results announced ..</h4>
            <br />
            <a style={{color:"black"}} href="https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>Life in an IIT | Born to engineers, IIT-Kanpur BTech ..</h4>
            <br />
            <a style={{color:"black"}} href="https://indianexpress.com/article/education/life-in-an-iit-kanpur-btech-student-electrical-engineering-branch-from-hyderabad-engineer-parents-jee-main-advanced-9466139/">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JoSAA Counselling Final seat allotment results announced ..</h4>
            <br />
            <a style={{color:"black"}} href="https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JEE Main 2024 Paper 2 Results ..</h4>
            <br />
            <a style={{color:"black"}} href="https://www.telegraphindia.com/edugraph/news/nta-has-declared-jee-main-2024-paper-2-scorecards-and-merit-list/cid/2021066">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>Top Govt/Private Engineering Colleges in IP University ..</h4>
            <br />
            <a style={{color:"black"}} href="hthttps://edufever.in/colleges/top-ip-university-engineering-colleges/">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JoSAA Participating Institutes 2024 ..</h4>
            <br />
            <a style={{color:"black"}} href="https://www.getmyuni.com/exams/josaa-participating-colleges">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JAC Delhi 2024 Seat Allotment Round 3  ..</h4>
            <br />
            <a style={{color:"black"}} href="https://collegedunia.com/exams/jac-delhi">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>CBI chargesheet in NEET scam ..</h4>
            <br />
            <a style={{color:"black"}} href="https://www.indiatoday.in/india-today-insight/story/cbi-chargesheet-in-neet-scam-brings-to-focus-dark-underbelly-of-exam-mafia-2576993-2024-08-05">Read more</a>
          </div>
          <div className="card1" data-aos="flip-left" data-aos-duration="1000">
            <h4>JEE Main 2024 Paper 2 Results ..</h4>
            <br />
            <a style={{color:"black"}} href="https://www.telegraphindia.com/edugraph/news/nta-has-declared-jee-main-2024-paper-2-scorecards-and-merit-list/cid/2021066">Read more</a>
          </div>
        </div>
      </div>
      <IconButton style={{height:"200px"}} onClick={slideRight}><KeyboardDoubleArrowRightIcon/></IconButton>
    </div>
  );
};

export default Carousel;
