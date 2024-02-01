import React, { FC, memo } from 'react';
import { CircleButton } from './button-group.styles';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { sendNumber } from '../../model/actions';

interface IProps {
  disabled?: boolean;
}

const ButtonGroup: FC<IProps> = memo(({ disabled }) => {
  const dispatch = useDispatch();

  return (
    <Box width="216px" display="flex" justifyContent="space-between" mt={2} mb={3}>
      <CircleButton disabled={disabled} onClick={() => dispatch(sendNumber(1))}>
        1
      </CircleButton>
      <CircleButton disabled={disabled} onClick={() => dispatch(sendNumber(0))}>
        0
      </CircleButton>
      <CircleButton disabled={disabled} onClick={() => dispatch(sendNumber(-1))}>
        -1
      </CircleButton>
    </Box>
  );
});

export { ButtonGroup };
