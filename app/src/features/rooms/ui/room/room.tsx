import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import { StyledBox } from './room.styles';
import ArrowBlue from 'shared/assets/arrow-blue.svg';
import ArrowWhite from 'shared/assets/arrow-white.svg';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoom } from '../../model/actions';
import { IRoom } from '../../model/interfaces';
import { getSelectedRoomNameSelector } from '../../model/selectors';
import { resetRooms } from '../../model/slice';
import { resetGame } from 'widget/playground/model/slice';

const Room: FC<IRoom> = (props) => {
  const dispatch = useDispatch();
  const selectedRoom = useSelector(getSelectedRoomNameSelector);
  const isSelected = selectedRoom?.name === props.name;

  const _onCLick = () => {
    dispatch(resetRooms());
    dispatch(resetGame());
    dispatch(selectRoom(props));
  };

  return (
    <Paper onClick={_onCLick}>
      <StyledBox selected={isSelected} width={{ xs: 'auto', md: '192px' }}>
        <Typography variant="body1">{props.name}</Typography>
        <img src={isSelected ? ArrowWhite : ArrowBlue} alt="arrow" />
      </StyledBox>
    </Paper>
  );
};

export { Room };
