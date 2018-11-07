import React from 'react';
import { Wrapper, ImageWrapper, Image, Title } from './Category.styles';
import PropTypes from 'prop-types';

const Category = props => (
  <Wrapper activeOpacity={0.5} onPress={props.onPress}>
    <ImageWrapper>
      <Image source={props.category.image} resizeMode={'contain'} />
    </ImageWrapper>
    <Title>{props.category.title}</Title>
  </Wrapper>
);

Category.prototype.propTypes = {
  category: PropTypes.object.isRequired,
  onPress: PropTypes.function
};

export default Category;
