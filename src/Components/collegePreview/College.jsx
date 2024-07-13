// import React from 'react'

import { Grid,styled, Typography } from "@mui/material"
import './College.css'
const Item = styled('div')(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // border: '1px solid',
    // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
    
  }));
function College() {
  return (
    <div className='container1'>
        
        <Grid container spacing={2}  >
            <Grid item sx={12} sx={{ margin:'auto'}}  >
                <Typography variant="h2" className='heading1' >College Name</Typography>
            </Grid>

            <Grid item xs={12}>
                <Item> 
                    <img src='http://res.cloudinary.com/ds23bhkcd/image/upload/v1713597990/bqk2xmrvw2erp6ly60sv.jpg'
                        
                        style={{ objectFit: 'cover', borderRadius: '10px',height:'30vh', width:'100%' }} />
                </Item>
            </Grid>
            <Grid item xs={12} >
                <Item> <Typography variant="p" sx={{fontSize:'25px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque vero tenetur, dolore exercitationem magni accusamus adipisci 
                    aliquam molestiae. Obcaecati magnam ipsam voluptatem facere corporis v
                    el eligendi eius nobis omnis ratione iure id, quasi recusandae aliquid
                    quae animi maiores numquam quam accusamus! Voluptatum neque soluta nisi
                    officiis, facere alias vel illum.</Typography> </Item>
            </Grid>
            <Grid item xs={6} >
                <Item><Typography variant="h6">330k/year</Typography></Item>
            </Grid>
            <Grid item xs={6} >
                <Item><Typography variant="p" sx={{fontSize:'20px'}}> Lorem, ipsum dolor sit
                     amet consectetur adipisicing elit. Fugit, nemo ratione. 
                    Esse dolor ratione doloremque repellat ab iusto quaerat maxime.</Typography></Item>
            </Grid>
            <Grid item xs={12} sx={{border:'1px solid black'}}>
                <Item><Typography variant="h6">placement</Typography></Item>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{border:'1px solid black'}}>
                        <Item>Highest Package: </Item>
                    </Grid>
                    <Grid item xs={4} sx={{border:'1px solid black'}}>
                        <Item>Average Package: </Item>
                    </Grid>
                    <Grid item xs={4} sx={{border:'1px solid black'}}>
                        <Item>Median Package: </Item>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>


                </Grid>
                
            </Grid>
        </Grid>
        
        <div className="dashboard">
      <div className="card">
        <img src="more.svg" className="more" />
        <h2>Refunds</h2>
        <h3>This month</h3>
        <var>
          6k
          <abbr>USD</abbr>
        </var>
      </div>
      <div className="card primary">
        <img src="more.svg" className="more" />
        <h2>Sales</h2>
        <h3>This month</h3>
        <var>
          50k
          <abbr>USD</abbr>
        </var>
      </div>
      <div className="card">
        <img src="more.svg" className="more" />
        <h2>Profit</h2>
        <h3>This month</h3>
        <var>
          11k
          <abbr>USD</abbr>
        </var>
      </div>
      <div className="card">
        <h2>Progress</h2>
        <div className="card-progress">
          <progress value="50" max="100"></progress>
          <var>
            16k
            <abbr>TASKS</abbr>
          </var>
        </div>
      </div>
      <div className="card">
        <h2>Products</h2>
        <div className="card-icon">
          <img src="cog.svg" />
          <div>
            <h3>Total</h3>
            <var> 41k </var>
          </div>
          <img src="chevron.svg" />
        </div>
      </div>
      <div className="card">
        <h2>Reviews</h2>
        <div className="card-icon">
          <img src="heart.svg" />
          <div>
            <h3>Rating</h3>
            <var> 71% </var>
          </div>
          <img src="chevron.svg" />
        </div>
      </div>
    </div>
    <Grid>
            <Grid xs={12}>
                <Item><Typography variant="h6"></Typography>Review</Item>
            </Grid>
            <Grid xs={12}>
                <Item>Review</Item>
            </Grid>
        </Grid>
    </div>
  )
}

export default College
//Rank Range , location,Establish year ,Fees , Area , Nirf ranking, Average Package