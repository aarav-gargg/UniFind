import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography, Rating } from '@mui/material';
import { currentUserContext, reviewContext } from '../context';
import { addReview } from '../../api/userService';
import { useNavigate } from 'react-router-dom';

function ReviewComponent({ onSubmit, collegeId }) {
  const [currentUser, setCurrentUser] = useContext(currentUserContext);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [studentId, setStudentId] = useState('');
  const [errors, setErrors] = useState({});
  const [newReview,setNewReview]=useContext(reviewContext)
  const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchReviews = async (collegeId) => {
      try {
        const response=await fetchReviews(collegeId)
        // console.log(response)
       
      } catch (error) {
       console.log(error)
      }
    }
    // Validate form fields
    try {
      const errors = {};
      if (!rating) errors.rating = 'Rating is required';
      if (!content) errors.content = 'Content is required';
      if (rating && content) {
        const reviewData = { rating, content, collegeId }
        const response = await addReview(reviewData);
        // console.log(response)
      }

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }
      
    
      fetchReviews(collegeId)
      // Clear errors and submit form
      setErrors({});
      onSubmit({ rating, content });
      setRating(0);
      setContent("")
      setNewReview(true)
      // window.location.reload()
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      component="form"

      sx={{ width: '100%', mx: 'auto', p: 1, border: '1px solid #ccc', borderRadius: 2 }}
    >


      <Box sx={{ mb: 1 }}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        {errors.rating && <Typography color="error">{errors.rating}</Typography>}
      </Box>

      <TextField
        label="Review Content"
        fullWidth
        multiline
        rows={3} // Reduced height
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        error={!!errors.content}
        helperText={errors.content}
        sx={{ mb: 1 }}
      />



      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Review
      </Button>

    </Box>
  );
}

export default ReviewComponent;
