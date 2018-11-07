import React from 'react';
import { Wrapper, IconWrapper, Icon, TextInput } from './Input.styles';

const Input = props => (
  <Wrapper>
    {props.icon && (
      <IconWrapper>
        <Icon source={props.icon} resizeMode={'contain'} />
      </IconWrapper>
    )}

    <TextInput placeholder={props.placeholder} onChange={props.onChange} />
  </Wrapper>
);

export default Input;
