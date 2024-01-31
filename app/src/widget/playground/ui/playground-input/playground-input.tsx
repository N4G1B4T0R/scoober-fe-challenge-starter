import React, { FC } from 'react';
import { StyledBox } from './playground-input.styles';

interface IProps {
  value?: string | number;
}
const PlaygroundInput: FC<IProps> = ({ value }) => <StyledBox>{value}</StyledBox>;

export { PlaygroundInput };
