import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const RoundBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#205A6D',
  width: '56px',
  minWidth: '56px',
  height: '56px',
  borderRadius: '50%',
  color: 'white',
  marginBottom: 16
});
