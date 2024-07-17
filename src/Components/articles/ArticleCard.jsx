import React, { useEffect } from 'react';
import "./ArticleCard.css";


const ArticleCard = () => {
    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
    
        const carouselDom = document.querySelector('.carousel');
        const SliderDom = carouselDom.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        const timeDom = document.querySelector('.carousel .time');
    
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        const timeRunning = 3000;
        const timeAutoNext = 7000;
    
        nextDom.onclick = function() {
          showSlider('next');    
        }
    
        prevDom.onclick = function() {
          showSlider('prev');    
        }
    
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
    
        function showSlider(type) {
          const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
          const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
          if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
          } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
          }
    
          clearTimeout(runTimeOut);
          runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
          }, timeRunning);
    
          clearTimeout(runNextAuto);
          runNextAuto = setTimeout(() => {
            nextDom.click();
          }, timeAutoNext);
        }
      }, []);
  return (
    <div>
 <div className="carousel">
        <div className="list">
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="author">UniFind</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>READ MORE</button>

                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>READ MORE</button>
                       
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>READ MORE</button>
                      
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="thumbnail">
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="public/projectPic.png"/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
        </div>

        <div className="arrows">
            <button id="prev">{'<'}</button>
            <button id="next">{'>'}</button>
        </div>
        <div className="time"></div>
    </div>
    </div>
  );
}

export default ArticleCard;
