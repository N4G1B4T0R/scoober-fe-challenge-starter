import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Room } from './ui/room';
import { useGetRoomsQuery } from './model/api';
import { IRoom } from './model/interfaces';

const RoomList = () => {
  const { data: roomList } = useGetRoomsQuery();

  return (
    <Box>
      <Box mt={4} mb={3}>
        <Typography variant="body1" textAlign="start">
          Choose you game room
        </Typography>
      </Box>

      {roomList?.map((room: IRoom) => <Room key={room.name} {...room} />)}
    </Box>
  );
};

export { RoomList };
