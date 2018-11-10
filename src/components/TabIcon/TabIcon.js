import React from 'react';
import { Image } from './TabIcon.styles';

const TabIcon = props => (
  <Image
    source={props.focused ? props.activeIcon : props.inactiveIcon}
    resizeMode={'contain'}
  />
);

export default TabIcon;
