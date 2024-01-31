import React from 'react';
import Logo from 'shared/assets/logo-footer.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const AppFooter = () => {
  return (
    <AppBar position="static" color="secondary" component={'footer'}>
      <Toolbar variant="dense">
        <img alt="Takeaway Logo" src={Logo} />
        <Box m="8px 16px" color="secondary.light" display={{ xs: 'none' }}>
          <Grid container justifyContent="flex-end">
            <Button href="#" color="inherit">
              Cookie statement
            </Button>
            <Button href="#" color="inherit">
              © 2021 Takeaway.com
            </Button>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
