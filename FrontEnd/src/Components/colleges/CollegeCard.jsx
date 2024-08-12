import React from 'react';
import "./CollegeCard.css";
import data from "../collegePreview/data.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const ArticleCard = () => {
    //   const navigate = useNavigate();

    //   const handleReadMore = (collegeId) => {
    //     navigate(`/college/${collegeId}`);
    //   };

    return (
        //     <div className="college-card-container">
        //       <Swiper
        //         spaceBetween={50}
        //         slidesPerView={1}
        //         navigation
        //         pagination={{ clickable: true }}
        //         modules={[Navigation, Pagination]}
        //       >
        //         {data.map((college, index) => (
        //           <SwiperSlide
        //             key={index}
        //             style={{ backgroundImage: `url(${college.imageUrl})` }}
        //           >
        //             <div className="college-card">
        //               <div className="college-name">{college.name}</div>
        //               <div className="college-description">
        //                 {college.description}
        //               </div>
        //               <button
        //                 className="read-more-btn"
        //                 onClick={() => handleReadMore(college.id)}
        //               >
        //                 Read More
        //               </button>
        //             </div>
        //           </SwiperSlide>
        //         ))}
        //       </Swiper>
        //     </div>
        //   );
        <div className="CollgesList">
           {data.map((college,index)=>(
             <div key={index} className="collegeArticle" data-aos="fade-up-left" data-aos-duration="1000">
             <div className="collegeArticleImg">
                 <img src={college.imageUrl} alt="" />
             </div>
             <div className="collegeArticleContent">
                 <Link to={`/College/${college.id}`}>
                     <h3>{college.name}</h3>
                 </Link>
                 <p>{college.preview}</p>
                 <button><Link to={`/College/${college.id}`}>
                     <h3>Read More</h3>
                 </Link></button>
             </div>
         </div>
           ))}
        </div>
    );
};

export default ArticleCard;
