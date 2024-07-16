import React from 'react';
import { Grid, styled, Typography } from "@mui/material";
import './College.css';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
  backgroundColor:'whitesmoke',
  color:'black'
}));

function College() {
  return (
    <>
    <div className='container1'>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h2" className='heading1'>College Name</Typography>
        </Grid>

        <Grid item xs={12} className='image'>
            <img src='http://res.cloudinary.com/ds23bhkcd/image/upload/v1713597990/bqk2xmrvw2erp6ly60sv.jpg'
              alt="College"
              style={{ objectFit: 'cover', borderRadius: '10px', height: '40vh', width: '100%' }} />
        </Grid>

        <Grid item xs={12}>
            <Typography variant="body1" className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero tenetur, dolore exercitationem magni accusamus adipisci aliquam molestiae. Obcaecati magnam ipsam voluptatem facere corporis vel eligendi eius nobis omnis ratione iure id, quasi recusandae aliquid quae animi maiores numquam quam accusamus! Voluptatum neque soluta nisi officiis, facere alias vel illum.
            </Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="h6" className='fee'>330k/year</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="body1" className='additional-info'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo ratione. Esse dolor ratione doloremque repellat ab iusto quaerat maxime.
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Item>
            <Typography variant="h6" className='placement'>Placement</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>Highest Package</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Average Package</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Median Package</Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>

      <div className="dashboard">
        <div className="card primary">
          <img src="more.svg" className="more" alt="More" />
          <h2>Refunds</h2>
          <h3>This month</h3>
          <var>6k<abbr>USD</abbr></var>
        </div>
        <div className="card primary">
          <img src="more.svg" className="more" alt="More" />
          <h2>Sales</h2>
          <h3>This month</h3>
          <var>50k<abbr>USD</abbr></var>
        </div>
        <div className="card primary">
          <img src="more.svg" className="more" alt="More" />
          <h2>Profit</h2>
          <h3>This month</h3>
          <var>11k<abbr>USD</abbr></var>
        </div>
        <div className="card primary">
          <h2>Progress</h2>
          <div className="card-progress">
            <progress value="50" max="100"></progress>
            <var>16k<abbr>TASKS</abbr></var>
          </div>
        </div>
        <div className="card primary">
          <h2>Products</h2>
          <div className="card-icon">
            <img src="cog.svg" alt="Cog" />
            <div>
              <h3>Total</h3>
              <var>41k</var>
            </div>
            <img src="chevron.svg" alt="Chevron" />
          </div>
        </div>
        <div className="card primary">
          <h2>Reviews</h2>
          <div className="card-icon">
            <img src="heart.svg" alt="Heart" />
            <div>
              <h3>Rating</h3>
              <var>71%</var>
            </div>
            <img src="chevron.svg" alt="Chevron" />
          </div>
        </div>
      </div>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h6" className='review-heading'>Review</Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Review</Item>
        </Grid>
      </Grid>
    </div></>
  );
}

export default College;
