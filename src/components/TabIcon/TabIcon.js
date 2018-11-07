import React from 'react';
import { Wrapper, Image } from './TabIcon.styles';

const TabIcon = props => (
  <Wrapper>
    <Image source={props.focused ? props.activeIcon : props.inactiveIcon} />
  </Wrapper>
);

export default TabIcon;
