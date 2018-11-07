import React from 'react';
import { Wrapper, Image } from './BackgroundIcons.styles';
import icons from '../../assets/images/icons.png';

const BackgroundIcons = () => (
  <Wrapper>
    <Image source={icons} resizeMode={'contain'} />
  </Wrapper>
);

export default BackgroundIcons;
