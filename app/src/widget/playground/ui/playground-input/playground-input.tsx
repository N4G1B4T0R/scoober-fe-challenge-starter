import React, { FC, memo } from 'react';
import { StyledBox } from './playground-input.styles';

interface IProps {
  value?: string | number;
}
const PlaygroundInput: FC<IProps> = memo(({ value }) => {
  return (
    <StyledBox>{value}</StyledBox>
  )
});

export { PlaygroundInput };
