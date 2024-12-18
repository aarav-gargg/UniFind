import React from 'react';
import './Team.css';
import IconButton from '@mui/material/IconButton';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

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
                                            <img src="./aarav.jpg" alt="Aarav Garg" />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                AARAV GARG
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Aarav is a software developer and the creative mind behind UniFind. With expertise in web development and problem-solving.
                                            </p>
                                            <p className="text-txt-small">
                                                Aarav is a software developer and the creative mind behind UniFind.
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton >
                                                <a href='https://www.linkedin.com/in/aarav-garg-5b1715273' target='_blank' rel="noreferrer"><FaLinkedin color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton >
                                                <a href='https://github.com/aarav-gargg' target='_blank' rel="noreferrer"><FaGithub color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton>
                                                <a target='_blank' href="hhttps://drive.google.com/file/d/1Rh0-zsCskZkg1ILe-xAiqWMiG8GuZjeG/view?usp=sharing"><FaRegFilePdf color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-swiper-slide">
                                    <div className="team-card team-c-color" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="team-img-wrapper">
                                            <img src="./pic2.jpg" alt="Amitoj Singh Bakshi" />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                Amitoj Singh Bakshi
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Amitoj, a skilled software and web developer, excels in crafting robust digital solutions. With expertise in frontend and backend technologies.
                                            </p>
                                            <p className="text-txt-small">
                                                Amitoj, a skilled software and web developer, excels in crafting robust digital solutions.
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton>
                                                <a href='https://www.linkedin.com/in/amitoj-singh-51a058247' target='_blank' rel="noreferrer"><FaLinkedin color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton >
                                                <a href='https://github.com/amitoj0605' target='_blank' rel="noreferrer"><FaGithub color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton aria-label="pdf">
                                                <a target='_blank' href="https://drive.google.com/file/d/1ZIftfysZCcI5tWZEc-ODw0xFONbQRmxv/view?usp=drivesdk"><FaRegFilePdf color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-swiper-slide">
                                    <div className="team-card team-c-color" data-aos="zoom-in" data-aos-duration="1000">
                                        <div className="team-img-wrapper">
                                            <img
                                                src="./chinmay.jpeg"
                                                alt="Chinmay Singh"
                                            />
                                        </div>
                                        <div className="team-card-content">
                                            <p className="team-text-blk team-name">
                                                Chinmay Singh
                                            </p>
                                            <p className="team-text-blk team-position">
                                                Full Stack Developer
                                            </p>
                                            <p className="team-text-blk team-testimonial">
                                                Chinmay is a skilled full-stack software developer and a integral part of UniFind.Currently he is pursuing B.tech in CSE.</p>
                                            <p className="text-txt-small">
                                                Chinmay is a skilled full-stack software developer and a integral part of UniFind.
                                            </p>
                                        </div>
                                        <div className="team-icon-buttons">
                                            <IconButton>
                                                <a href='https://www.linkedin.com/in/chinmay-singh-4092b0253' target='_blank' rel="noreferrer"><FaLinkedin color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton aria-label="github">
                                                <a href='https://github.com/Chinmay67' target='_blank' rel="noreferrer"><FaGithub color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                            <IconButton aria-label="pdf">
                                                <a target='_blank' href=""><FaRegFilePdf color='white' size={35} className='team-icon-logo' /></a>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="team-swiper-pagination team-container-block">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;
