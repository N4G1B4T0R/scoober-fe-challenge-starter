import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import BotLogo from 'shared/assets/logo.svg';
import PlayerLogo from 'shared/assets/player.svg';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { PlaygroundInput } from '../playground-input';
import { RoundBox } from './player.styles';
import { IMessage } from '../../model/interfaces';

interface IProps extends IMessage {
  isWaiting?: boolean;
}

const Player: FC<IProps> = (props) => {
  const { isCurrentUser, format, selectedNumber, result, isWaiting } = props;

  const flexDirection = isCurrentUser ? 'row-reverse' : 'row';
  const contentPosition = isCurrentUser ? 'flex-end' : 'flex-start';
  const logo = isCurrentUser ? PlayerLogo : BotLogo;

  if (isWaiting) {
    return (
      <Box mt={2}>
        <Grid container flexDirection={flexDirection}>
          <Grid container item xs={2} justifyContent={contentPosition}>
            <Skeleton variant="circular" width={54} height={54} />
          </Grid>
          <Grid
            container
            item
            xs={10}
            flexDirection="column"
            alignItems={contentPosition}
            alignContent={contentPosition}>
            <Skeleton variant="circular" width={54} height={54} />
            <Box mb={1} />
            <Skeleton variant="rectangular" width={230} height={32} />
            <Box mb={1} />
            <Skeleton variant="rectangular" width={230} height={32} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box mt={2}>
      <Grid container flexDirection={flexDirection}>
        <Grid container item xs={2} justifyContent={contentPosition}>
          <Avatar alt="Logo" src={logo} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          flexDirection="column"
          alignItems={contentPosition}
          alignContent={contentPosition}>
          <RoundBox>{selectedNumber}</RoundBox>
          <PlaygroundInput value={format} />
          <PlaygroundInput value={result} />
        </Grid>
      </Grid>
    </Box>
  );
};

export { Player };
