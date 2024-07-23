import { Grid, styled, Typography } from "@mui/material";
import './College.css';

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
  return (
    <div className='container1'>
      <Grid container spacing={4}>
        <Grid item xs={12} className='image'>
          <div className='container101' data-aos="fade-down" data-aos-duration="1000">
            <div className="content">
              <h1 className="headingTop">College Name</h1>
            </div>
          </div>
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
        {[
          { title: "Refunds", amount: "6k", unit: "USD" },
          { title: "Sales", amount: "50k", unit: "USD" },
          { title: "Profit", amount: "11k", unit: "USD" },
          { title: "Progress", progress: 50, unit: "TASKS" },
          { title: "Products", amount: "41k" },
          { title: "Reviews", amount: "71%", unit: "Rating" },
        ].map((card, index) => (
          <div className="card primary" key={index}>
            {card.title === "Progress" ? (
              <>
                <h2>{card.title}</h2>
                <div className="card-progress">
                  {/* <progress value={card.progress} max="100"></progress> */}
                  <var>{card.progress}<abbr>{card.unit}</abbr></var>
                </div>
              </>
            ) : (
              <>
                <img src="more.svg" className="more" alt="More" />
                <h2>{card.title}</h2>
                <h3>This month</h3>
                <var>{card.amount}<abbr>{card.unit}</abbr></var>
              </>
            )}
          </div>
        ))}
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
    </div>
  );
}

export default College;
