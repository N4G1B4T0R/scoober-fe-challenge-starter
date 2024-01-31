import { styled } from '@mui/material/styles';

export const StyledBox = styled('div')(({ isGameFinished }: { isGameFinished?: boolean }) => {
  return {
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    height: 'calc(100vh - 154px)',
    overflowY: isGameFinished ? 'clip' : 'auto',
    padding: '24px 8px',
    position: 'relative'
  };
});
