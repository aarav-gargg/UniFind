import React from 'react';
import './Team.css';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Team = () => {
    return (
        <>
            <div className="team-responsive-container-block team-outer-container">
                <div className="team-responsive-container-block team-inner-container">
                    <p className="team-text-blk team-section-head-text">
                        Our Team
                    </p>
                    <p className="team-text-blk team-section-subhead-text">
                        Meet the Visionaries Crafting Tomorrow: The Dynamic Team Behind Our Innovations
                    </p>
                    <div className="team-responsive-container-block">
                        <div className="team-swiper">
                            <div className="team-swiper-wrapper">
                                <div className="team-swiper-slide">
                                    <div className="team-card team-c-color" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="team-img-wrapper">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw40.png" alt="Aarav Garg" />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                Aarav Garg
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton aria-label="linkedin">
                                                <a href='https://www.linkedin.com/in/aarav-garg-5b1715273' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="github">
                                                <a href='https://github.com/aarav-gargg' target='_blank' rel="noreferrer"><GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="pdf">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-swiper-slide">
                                    <div className="team-card team-c-color" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="team-img-wrapper">
                                            <img src="/pic2.jpg" alt="Amitoj Singh Bakshi" />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                Amitoj Singh Bakshi
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton aria-label="linkedin">
                                                <a href='https://www.linkedin.com/in/amitoj-singh-51a058247' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="github">
                                                <a href='https://github.com/amitoj0605' target='_blank' rel="noreferrer"><GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="pdf">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-swiper-slide">
                                    <div className="team-card team-c-color" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="team-img-wrapper">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw42.png" alt="Chinmay Singh" />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                Chinmay Singh
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton aria-label="linkedin">
                                                <a href='https://www.linkedin.com/in/chinmay-singh-4092b0253' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
                                            </IconButton>
                                            <IconButton aria-label="github">
                                                <a href='https://github.com/Chinmay67' target='_blank' rel="noreferrer"><GitHubIcon /></a>
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="pdf">
                                                <PictureAsPdfIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-swiper-pagination team-container-block">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;
