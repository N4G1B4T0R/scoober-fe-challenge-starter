import React from 'react';
import Logo from 'shared/assets/logo-footer.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { StyledLink } from './app-footer.styles';

export const AppFooter = () => {
  return (
    <AppBar position="static" color="secondary" component={'footer'}>
      <Toolbar variant="dense">
        <Grid container justifyContent="space-between">
          <Box mt="4px">
            <img alt="Takeaway Logo" src={Logo} />
          </Box>
          <Box m="8px 16px" color="secondary.light" display={{ xs: 'none', md: 'flex' }}>
            <Grid container justifyContent="flex-end">
              <StyledLink href="#">Cookie statement</StyledLink>
              <StyledLink href="#">© 2021 Takeaway.com</StyledLink>
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
