import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography, Rating } from '@mui/material';
import { currentUserContext } from '../context';

function ReviewComponent({ onSubmit }) {
    const [currentUser, setCurrentUser] = useContext(currentUserContext);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [studentId, setStudentId] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const errors = {};
    if (!rating) errors.rating = 'Rating is required';
    if (!content) errors.content = 'Content is required';
    if (!studentId) errors.studentId = 'Student ID is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Clear errors and submit form
    setErrors({});
    onSubmit({ rating, content, studentId });
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
