import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsRoomReadySelector,
  getSelectedRoomNameSelector
} from 'features/rooms';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { listeningGame, startGame } from './model/actions';
import { resetGame } from './model/slice';
import { Result, ButtonGroup, Player, PlaygroundInput } from './ui';
import {
  getIsGameFinishedSelector,
  getIsWinningSelector,
  getMessageListSelector,
  getNumberSelector,
  isTurnWaitingSelector
} from './model/selector';
import Grid from '@mui/material/Grid';
import { StyledBox } from './playground.styles';
import { AppFallback } from '../../shared/UI-kit';

const Playground = () => {
  const dispatch = useDispatch();
  const selectedRoom = useSelector(getSelectedRoomNameSelector);
  const isRoomReady = useSelector(getIsRoomReadySelector);
  const randomNumber = useSelector(getNumberSelector);
  const isWaiting = useSelector(isTurnWaitingSelector);
  const isGameFinished = useSelector(getIsGameFinishedSelector);
  const isWinning = useSelector(getIsWinningSelector);
  const list = useSelector(getMessageListSelector);

  const _initGame = () => {
    dispatch(startGame());
  };

  const _startNewGame = () => {
    dispatch(resetGame());
    dispatch(listeningGame());
  };

  useEffect(() => {
    if (isRoomReady) {
      dispatch(listeningGame());
    }
  }, [isRoomReady, dispatch, selectedRoom]);

  if (!selectedRoom) {
    return (
      <StyledBox>
        <Box width="100%">
          <Typography variant="h5" align="center">
            Please select a game room!
          </Typography>
        </Box>
      </StyledBox>
    );
  }

  if (!isRoomReady) {
    return (
      <StyledBox>
        <Box width="100%">
          <Typography variant="body1" align="center">
            Waiting for opponent...
          </Typography>
        </Box>
      </StyledBox>
    );
  }

  if (!randomNumber) {
    return (
      <StyledBox>
        <Box width="100%">
          <Typography variant="body1" align="center">
            {selectedRoom.name}
          </Typography>
          <Box mb={2} />

          <Button variant="contained" onClick={_initGame}>
            Play
          </Button>
        </Box>
      </StyledBox>
    );
  }

  if (list.length === 1 && !list[0].format) {
    return (
      <StyledBox>
        <Box width="100%">
          <PlaygroundInput value={list[0].number} />
          <Grid container justifyContent="center">
            <ButtonGroup disabled={isWaiting} />
          </Grid>
        </Box>
      </StyledBox>
    );
  }

  return (
    <StyledBox isGameFinished={isGameFinished}>
      {isGameFinished && <Result isWinning={isWinning} onClick={_startNewGame} />}
      <Box width="100%">
        {list.map((item, index: number) => (
          <Player key={index} {...item} />
        ))}

        <AppFallback isVisible={isWaiting} fallback={null}>
          <Player isWaiting={isWaiting} />
        </AppFallback>

        <Grid container justifyContent="center">
          <ButtonGroup disabled={isWaiting} />
        </Grid>
      </Box>
    </StyledBox>
  );
};

export { Playground };
