import React from 'react';
import { RoomList } from 'features/rooms';
import { Playground } from 'widget/playground';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <Grid container flexWrap="nowrap">
      <Box mr={3}>
        <RoomList />
      </Box>
      <Playground />
    </Grid>
  );
};

export { Dashboard };
