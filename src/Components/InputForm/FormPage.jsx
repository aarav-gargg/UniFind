import React from 'react'
import "./FormPage.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormPage() {
  const [gender, setgender] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <div className='container'>
      <div className="content">
        <h1>
        Get personalized college predictions tailored to you!!!
        </h1>
      </div>
    </div>
    <div className="form">
    <select name="country"><option value="B.tech" selected>B.E./B.tech</option></select>
    <input type="number" placeholder='Enter your JEE RANK'/>
    <select name="country"><option value="gen" selected>General</option> <option value="obc">OBC</option>
    <option value="sc">SC</option>  <option value="st">ST</option> <option value="ews">Economically weaker section</option>
    <option value="pwd">PWD</option>
    </select>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"o"}>Others</MenuItem>
        </Select>
      </FormControl>

    </div>
    </>
    
  )
}

export default FormPage
