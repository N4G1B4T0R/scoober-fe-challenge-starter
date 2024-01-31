import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoginForm } from 'widget/login-form';

export const Login = () => {
  return (
    <Box mt={6} width="100%">
      <Grid container justifyContent="center">
        <LoginForm />
      </Grid>
    </Box>
  );
};
