import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Text = styled('p')((props) => ({
  color: 'white',
  [props.theme.breakpoints.up('xs')]: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '16px'
  },
  [props.theme.breakpoints.up('md')]: {
    fontSize: 41,
    fontWeight: 700,
    lineHeight: '52px'
  }
}));

export const StyledButton = styled(Button)({
  background: 'white',
  height: '56px',
  borderRadius: '24px',
  width: 243,
  fontSize: 16,
  fontWeight: 700,
  lineHeight: '24px',
  textAlign: 'center',
  color: '#1574F5',
  ':hover': {
    backgroundColor: 'white'
  }
});

export const StyledBox = styled(Box)({
  height: 'inherit',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  paddingBottom: '48px'
});
