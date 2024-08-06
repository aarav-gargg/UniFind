import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IconButton } from '@mui/material';

const cardData = [
  {
    title: 'UPTAC Counselling 2024 choice filling process postponed till ..',
    link: 'http://timesofindia.indiatimes.com/articleshow/112152683.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst',
  },
  {
    title: 'JoSAA Counselling Final seat allotment results announced ..',
    link: 'https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms',
  },
  {
    title: 'Life in an IIT | Born to engineers, IIT-Kanpur BTech ..',
    link: 'https://indianexpress.com/article/education/life-in-an-iit-kanpur-btech-student-electrical-engineering-branch-from-hyderabad-engineer-parents-jee-main-advanced-9466139/',
  },
  {
    title: 'JoSAA Counselling Final seat allotment results announced ..',
    link: 'https://timesofindia.indiatimes.com/education/news/josaa-counselling-2024-final-seat-allotment-results-out-at-josaa-nic-in-check-direct-link-here/articleshow/111824345.cms',
  },
  {
    title: 'JEE Main 2024 Paper 2 Results ..',
    link: 'https://www.telegraphindia.com/edugraph/news/nta-has-declared-jee-main-2024-paper-2-scorecards-and-merit-list/cid/2021066',
  },
  {
    title: 'Top Govt/Private Engineering Colleges in IP University ..',
    link: 'https://edufever.in/colleges/top-ip-university-engineering-colleges/',
  },
  {
    title: 'JoSAA Participating Institutes 2024 ..',
    link: 'https://www.getmyuni.com/exams/josaa-participating-colleges',
  },
  {
    title: 'JAC Delhi 2024 Seat Allotment Round 3  ..',
    link: 'https://collegedunia.com/exams/jac-delhi',
  },
  {
    title: 'CBI chargesheet in NEET scam ..',
    link: 'https://www.indiatoday.in/india-today-insight/story/cbi-chargesheet-in-neet-scam-brings-to-focus-dark-underbelly-of-exam-mafia-2576993-2024-08-05',
  },
  {
    title: 'JEE Main 2024 Paper 2 Results ..',
    link: 'https://www.telegraphindia.com/edugraph/news/nta-has-declared-jee-main-2024-paper-2-scorecards-and-merit-list/cid/2021066',
  },
];

const Carousel = () => {
  const [position, setPosition] = useState(1); // Start at the first cloned card
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const cardWidth = cards.querySelector('.card1').offsetWidth;
    const totalCards = cardData.length * 3; // Triple the cards for infinite effect

    // Set the width of the cards container
    cards.style.width = `${cardWidth * totalCards}px`;

    // Clone cards for infinite loop effect
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
        setPosition(cardData.length * 2); // Skip to the second last card (last actual card)
        cards.style.transform = `translateX(-${cardData.length * 2 * cardWidth}px)`;
      } else if (position === cardData.length * 3 - 1) {
        cards.style.transition = 'none';
        setPosition(cardData.length); // Skip to the second card (first actual card)
        cards.style.transform = `translateX(-${cardWidth * cardData.length}px)`;
      }
    };

    cards.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      cards.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [position]);

  return (
    <div className="container2">
      <IconButton style={{ height: "200px" }} onClick={slideLeft}><KeyboardDoubleArrowLeftIcon /></IconButton>
      <div className="card-wrapper">
        <div className="cards" ref={cardsRef}>
          {Array(3).fill(cardData).flat().map((card, index) => (
            <div className="card1" key={index} data-aos="flip-left" data-aos-duration="1000">
              <h4>{card.title}</h4>
              <br />
              <a style={{ color: "aqua" }} href={card.link} target='_blank'>Read more</a>
            </div>
          ))}
        </div>
      </div>
      <IconButton style={{ height: "200px" }} onClick={slideRight}><KeyboardDoubleArrowRightIcon /></IconButton>
    </div>
  );
};

export default Carousel;
