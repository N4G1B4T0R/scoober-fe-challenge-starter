import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import Logo from 'shared/assets/logo.svg';
import { FC } from 'react';

interface IProps {
  username?: string;
}

const AppHeader: FC<IProps> = ({ username }) => {
  const title = username ? `Playing with ${username}` : 'Login';
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Avatar alt="Takeaway Logo" src={Logo} />
        <Box m="8px 16px" color="secondary.light">
          <Grid container flexDirection="column" alignItems="flex-start">
            <Typography variant="h5" display="block">
              {title}
            </Typography>
            <Typography variant="subtitle2" display="block">
              Win the game or win the job
            </Typography>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { AppHeader };
