import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Info,
  Title,
  Details,
  Location,
  LocationIconWrapper,
  LocationText,
  LocationIcon,
  Likes,
  LikesIconWrapper,
  LikesText,
  LikesIcon,
  ChevronWrapper,
  Chevron
} from './Restaurant.styles';
import PropTypes from 'prop-types';
import likeIcon from '../../../assets/images/heart.png';
import locationIcon from '../../../assets/images/map-marker.png';
import chevronIcon from '../../../assets/icons/chevron-right.png';

const Restaurant = props => (
  <Wrapper onPress={props.onPress} showBorder={props.showBorder}>
    <ImageWrapper>
      <Image source={props.restaurant.image} />
    </ImageWrapper>
    <Info>
      <Title>{props.restaurant.title}</Title>
      <Details>
        <Location>
          <LocationIconWrapper>
            <LocationIcon source={locationIcon} />
          </LocationIconWrapper>
          <LocationText>{props.restaurant.location}</LocationText>
        </Location>
        <Likes>
          <LikesIconWrapper>
            <LikesIcon source={likeIcon} />
          </LikesIconWrapper>
          <LikesText>{props.restaurant.likes}</LikesText>
        </Likes>
      </Details>
    </Info>
    <ChevronWrapper>
      <Chevron source={chevronIcon}/>
    </ChevronWrapper>
  </Wrapper>
);

Restaurant.prototype.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onPress: PropTypes.function,
  showBorder: PropTypes.boolean
};

export default Restaurant;
