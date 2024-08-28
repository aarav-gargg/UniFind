
import React, { useContext, useEffect, useState } from "react";
import { Button, Grid, styled, Typography, Tooltip, tooltipClasses } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import data from './data.json';
import ReviewComponent from "../Review/ReviewComponent";
import { currentUserContext, reviewContext, userContext } from "../context";
import { fetchReviews } from "../../api/userService";
import './College.css';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '8px',
  textAlign: 'center',
  color: 'black',
}));


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
}));

function College() {
  const { collegeId } = useParams();
  const [user, setUser] = useContext(userContext);
  const [fetchedReviews, setFetchedReviews] = useState([]);
  const navigate = useNavigate();
  function handleReviewClick() {
    navigate("/Login");
  }
  // const [review, setReview] = useContext(reviewContext);

  const [college, setCollege] = useState({});
  const [newReview, setNewReview] = useState(false);

  useEffect(() => {
    const fetchCollegeDetails = (id) => {
      const response = data.find(obj => obj.id === id);
      setCollege(response);
    };
    fetchCollegeDetails(collegeId);
  }, [collegeId]);

  useEffect(() => {
    const fetchCollegeReviews = async (collegeId) => {
      try {
        const response = await fetchReviews(collegeId)
        console.log(response)
        setFetchedReviews(response.data.data)
        console.log(fetchedReviews)

      } catch (error) {
        console.log(error)
      }
    }
    fetchCollegeReviews(collegeId)
  }, [])

  const handleReviewSubmit = (review) => {
    console.log('Review submitted:', review);
    // Handle review submission
  };

  return (
    <div className='container1'>
      <Grid container spacing={4}>
        <Grid item xs={12} className='image'>
          <div className='container101' data-aos="fade-down" data-aos-duration="1000" style={{
            background: `url(${college.imageUrl})`, backgroundPosition: "center",
            backgroundSize: "cover", backgroundRepeat: "no-repeat"
          }}>
            <div className="content">
              <h1 className="headingTop">{college.name}</h1>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className='description'>
            {college.description}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" className='fee'>
            <h4>College Fees For complete B.tech</h4>
            {college.fees}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" className='additional-info'>
            <h4>College Location</h4>
            {college.location}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Item className="container33">
            <Typography variant="h6" className='placement'>Placement Records</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <h4>Highest Package</h4>
                  {college.Highest}
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item><h4>Average Package</h4> {college.Average}</Item>
              </Grid>
              <Grid item xs={4}>
                <Item><h4>Median Package</h4>{college.Median}</Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>

      <div className="dashboard">
        {[
          { title: "NIRF RANKING", amount: `${college.ranking}` },
          { title: "HOSTEL", amount: `${college.Hostel}`, unit: "USD" },
          { title: "ESTABLISHED", amount: `${college.Established}`, unit: "USD" },
          { title: "WEBSITE", amount: "click here", unit: "TASKS" },
          { title: "CUT-OFF", amount: `${college.Cutoff}` },
          { title: "TYPE", amount: `${college.type}`, unit: "Rating" },
        ].map((card, index) => (
          <div className="card55 primary" key={index}>
            {card.title === "WEBSITE" ? (
              <>
                <h2>{card.title}</h2>
                <a href={college.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <var>{card.amount}</var>
                </a>
              </>
            ) : (
              <>
                <h2>{card.title}</h2>
                <var>{card.amount}</var>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="alert">
        <h4>Important Note:</h4>
        The data displayed here is sourced from various external resources so the actual outcome may vary.
      </div>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <div className="reviewsec">
            <h1>Student Reviews</h1>
          </div>
          {user && <Item><Button variant="contained" onClick={() => setNewReview(!newReview)}>Add Review</Button></Item>}
          {!user && (
            <HtmlTooltip title="YOU NEED TO LOGIN TO ADD REVIEW" placement="top">
              <Item><Button variant="contained" onClick={handleReviewClick}>Add Review</Button></Item>
            </HtmlTooltip>
          )}
          {newReview && (
            <ReviewComponent onSubmit={handleReviewSubmit} collegeId={collegeId} />
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Item className="container33">
          <Typography variant="h6" className='review-heading'>Reviews</Typography>
          {fetchedReviews.length > 0 ? (
            fetchedReviews.map((review, index) => (
              <div key={index} className="review-item">
                <Typography variant="body2" className='review-author'>
                  <strong>{review.owner.name}</strong> says:
                </Typography>
                <Typography variant="body1" className='review-text'>
                  {review.content}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="body1">No reviews available for this college yet.</Typography>
          )}
        </Item>
      </Grid>
    </div>
  );
}

export default College;


