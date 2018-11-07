import React from 'react';
import { Wrapper, Image } from './SearchIcon.styles';
import search from '../../assets/icons/search.png';
import PropTypes from 'prop-types';

const SearchIcon = props => (
  <Wrapper onPress={props.onPress}>
    <Image source={search} />
  </Wrapper>
);

SearchIcon.prototype.propTypes = {
  onPress: PropTypes.function
};

export default SearchIcon;
