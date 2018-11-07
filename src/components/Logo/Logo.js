import React from 'react';
import { Wrapper, Image } from './Logo.styles';
import logo from '../../assets/images/logo.png';

const Logo = () => (
  <Wrapper>
    <Image source={logo} resizeMode={'stretch'} />
  </Wrapper>
);

export default Logo;
