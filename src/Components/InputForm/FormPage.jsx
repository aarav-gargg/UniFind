import React from 'react'
import "./FormPage.css"
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
// import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from '@mui/material';
import CollegeDisplay from './CollegeDisplay';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function FormPage() {
  const names = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep",
    "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];
  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [course, setcourse] = React.useState('');

  const handlecourse = (event) => {
    setcourse(event.target.value);
  };

  const [quota, setQuota] = React.useState('');

  const handleQuota = (event) => {
    setQuota(event.target.value);
  };

  const [gender, setGender] = React.useState('');

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <div className="content">
          <h1>
            Get personalized college predictions tailored to you!!!
          </h1>
          <p>Unlock Your Future with Our College Predictor! Discover your dream college effortlessly with our state-of-the-art AI-powered tool. Just enter your details, and let our smart algorithm match you with the best colleges based on your preferences and scores. Say goodbye to uncertainty and hello to a brighter future—your perfect college is just a click away.</p>
        </div>
      </div>
      <div className="circle">
      <div className="form">
        <h2>Predict your College now</h2>
        <div className='course'>
          <span >Select your Course</span>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={course}
            label="Age"
            onChange={handlecourse}
            className='courseSel'
          >
            <MenuItem value={"be"}>B.E./B.tech</MenuItem>
          </Select>
        </div>
        <span>Enter your JEE mains score/rank</span>
        <TextField fullWidth label="Rank" id="fullWidth" type='number' className='rank' />
        <span>Category</span>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={quota}
          onChange={handleQuota}
          className='quota'
        >
          <MenuItem value="Gen">
            <em>General</em>
          </MenuItem>
          <MenuItem value={"OBC"}>OBC</MenuItem>
          <MenuItem value={"ST"}>ST</MenuItem>
          <MenuItem value={"SC"}>SC</MenuItem>
          <MenuItem value={"EWS"}>Economically weaker section</MenuItem>
          <MenuItem value={"PWD"}>PWD</MenuItem>
        </Select>
        <span>Gender</span>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Gender"
          onChange={handleGender}
          className='gender'
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"o"}>Others</MenuItem>
        </Select>
        <span>Domicile State</span>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          className='domicile'
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <Button variant='contained' sx={{backgroundColor:' rgb(109, 128, 212)' , width:'30%'
        }}>Submit</Button>
      </div>
      </div>
      <div className='collegeDisplay'>
        <CollegeDisplay/>
        <CollegeDisplay/>
        <CollegeDisplay/>
        <CollegeDisplay/>
      </div>
      
        

    </>

  )
}

export default FormPage;
