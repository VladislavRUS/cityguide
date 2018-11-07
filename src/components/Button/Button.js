import React from 'react';
import { Wrapper, Text } from './Button.styles';

const Button = props => (
  <Wrapper {...props} activeOpacity={0.8}>
    <Text textColor={props.textColor}>{props.text}</Text>
  </Wrapper>
);

export default Button;
