import { styled } from '@mui/material/styles';

export const StyledBox = styled('div')<{ isGameFinished?: boolean }>((props) => {
  return {
    display: 'flex',
    backgroundColor: 'white',
    overflowY: props?.isGameFinished ? 'clip' : 'auto',
    padding: '24px 8px',
    position: 'relative',
    [props.theme.breakpoints.up('xs')]: {
      width: 'auto',
      height: 'calc(100vh - 384px)'
    },
    [props.theme.breakpoints.up('md')]: {
      width: '100%',
      height: 'calc(100vh - 154px)'
    }
  };
});
