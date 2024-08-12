import { Grid, styled, Typography } from "@mui/material";
import './College.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from './data.json'

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'whitesmoke',
  color: 'black',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function College() {
  const {collegeId}=useParams()
  const [college, setCollege] = useState({});
  useEffect(()=>{
    const fetchCollegeDetails=(id)=>{
      const response=data.find(obj=>obj.id===id)
      setCollege(response)
      console.log(response)
    }
    fetchCollegeDetails(collegeId);
  },[collegeId])
  return (
    <div className='container1'>
      <Grid container spacing={4}>
        <Grid item xs={12} className='image'>
          <div className='container101' data-aos="fade-down" data-aos-duration="1000" style={{background: `url(${college.imageUrl})` ,backgroundPosition: "center",
  backgroundSize: "cover",backgroundRepeat: "no-repeat" }}>
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
            {college.fees}</Typography>
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
                  {college.Highest}</Item>
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
          { title: "NIRF RANKING", amount: `${college.ranking}`, },
          { title: "HOSTEL", amount: `${college.Hostel}`, unit: "USD" },
          { title: "ESTABLISHED", amount: `${college.Established}`, unit: "USD" },
          { title: "WEBSITE", amount: "click here", unit: "TASKS" },
          { title: "CUT-OFF", amount: `${college.Cutoff}` },
          { title: "TYPE", amount: `${college.type}`, unit: "Rating" },
        ].map((card, index) => (
          <div className="card55 primary" key={index}>
            {card.title==="WEBSITE" ? (
              <>
               <h2>{card.title}</h2>
               
              <a href={college.websiteUrl} target="_blank"> <var >{card.amount}</var></a>
              </>
            ):(
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
          <button>ADD REVIEW</button>
          </div>
          <Item className="container33">
            <Typography variant="h6" className='review-heading'>Review</Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className="container33">Review</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default College;
