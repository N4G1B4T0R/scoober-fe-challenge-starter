import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Error = () => (
  <Box>
    <Typography variant="h4" align="center">
      Error page
    </Typography>
    <Button component={Link} variant="contained" to="/">
      Go to Home{' '}
    </Button>
  </Box>
);

export { Error };
