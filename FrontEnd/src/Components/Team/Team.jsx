import React from 'react'
import './Team.css'
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Navigate } from 'react-router-dom';



const Team = () => {
    return (
        <>
            <div className="responsive-container-block outer-container">
                <div className="responsive-container-block inner-container">
                    <p className="text-blk section-head-text">
                        Our Team
                    </p>
                    <p className="text-blk section-subhead-text">
                        Meet the Visionaries Crafting Tomorrow: The Dynamic Team Behind Our Innovations
                    </p>
                    <div className="responsive-container-block">
                        <div className="swiper team-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card c-color" data-aos="zoom-in"  data-aos-duration="1000">
                                        <div className="img-wrapper">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw40.png" />
                                        </div>
                                        <div className="card-content">
                                            <p className="text-blk name">
                                                Aarav Garg
                                            </p>
                                            <p className="text-blk position">
                                                Full Stack Developer
                                            </p>
                                            <p className="text-blk testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="icon-buttons">
                                        <IconButton aria-label="delete">
                                                <a href='https://www.linkedin.com/in/aarav-garg-5b1715273' target='_blank'><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="delete" >
                                               <a href='https://github.com/aarav-gargg' target='_blank'> <GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="add an alarm">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card c-color" data-aos="zoom-in"  data-aos-duration="1000">
                                        <div className="img-wrapper">
                                            <img src="/pic2.jpg" />
                                        </div>
                                        <div className="card-content">
                                            <p className="text-blk name">
                                                Amitoj Singh Bakshi
                                            </p>
                                            <p className="text-blk position">
                                                Full Stack Developer
                                            </p>
                                            <p className="text-blk testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="icon-buttons">
                                        <IconButton aria-label="delete">
                                                <a href='https://www.linkedin.com/in/amitoj-singh-51a058247' target='_blank'><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="delete" >
                                               <a href='https://github.com/amitoj0605' target='_blank'> <GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="add an alarm">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card c-color" data-aos="zoom-in"  data-aos-duration="1000">
                                        <div className="img-wrapper">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png" />
                                        </div>
                                        <div className="card-content">
                                            <p className="text-blk name">
                                                Chinmay Singh
                                            </p>
                                            <p className="text-blk position">
                                                Full Stack Developer
                                            </p>
                                            <p className="text-blk testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="icon-buttons">
                                            <IconButton aria-label="delete">
                                                <a href='https://www.linkedin.com/in/chinmay-singh-4092b0253' target='_blank'><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="delete" >
                                               <a href='https://github.com/Chinmay67' target='_blank'> <GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="add an alarm">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination container-block">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
