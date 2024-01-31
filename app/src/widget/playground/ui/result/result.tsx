import React, { FC } from 'react';
import WinLogo from 'shared/assets/win.svg';
import LoseLogo from 'shared/assets/lose.svg';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { StyledBox, StyledButton, Text } from './result.styles';

interface IProps {
  isWinning: boolean;
  onClick: () => void;
}

const Result: FC<IProps> = ({ isWinning, onClick }) => {
  const logo = isWinning ? WinLogo : LoseLogo;
  const title = isWinning ? 'You win' : 'You lose';

  return (
    <StyledBox>
      <Grid container alignContent={'center'} flexDirection="column">
        <Zoom in={true} timeout={300}>
          <img src={logo} alt="logo" />
        </Zoom>
        <Text>{title}</Text>
        <StyledButton onClick={onClick}>New Game</StyledButton>
      </Grid>
    </StyledBox>
  );
};

export { Result };
