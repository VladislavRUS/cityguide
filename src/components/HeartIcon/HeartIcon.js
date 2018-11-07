import React from 'react';
import { Wrapper, Image } from './HeartIcon.styles';
import heartIcon from '../../assets/icons/heart.png';

const HeartIcon = () => (
  <Wrapper>
    <Image source={heartIcon} resizeMode={'contain'} />
  </Wrapper>
);

export default HeartIcon;
