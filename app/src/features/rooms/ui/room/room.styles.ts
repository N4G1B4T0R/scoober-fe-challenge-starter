import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)(({ selected }: { selected: boolean }) => {
  return {
    cursor: 'pointer',
    backgroundColor: selected ? '#1574F5' : 'white',
    width: '192px',
    display: 'flex',
    padding: '8px 8px 8px 24px',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      color: selected ? 'white' : 'auto'
    },
    svg: {
      filter: 'red'
    }
  };
});
